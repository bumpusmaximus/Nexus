#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import { spawnSync } from "child_process";
import fs from "fs";
import path from "path";

const WATCH_DIRS = [
  "C:\\Users\\Bump\\.gemini\\antigravity\\AgenticNexus\\handoffs\\active",
  "C:\\Users\\Bump\\Nexus\\handoffs\\active",
];

// Full path to claude CLI — avoids PATH lookup failures in subprocess environments
const CLAUDE_CMD = "C:\\Users\\Bump\\AppData\\Roaming\\npm\\claude.cmd";

const HANDOFF_PROMPT = `Check both AgenticNexus handoff directories for pending tasks:
1. C:\\Users\\Bump\\.gemini\\antigravity\\AgenticNexus\\handoffs\\active
2. C:\\Users\\Bump\\Nexus\\handoffs\\active

For each directory, look for any folder containing a .delegate-to-claude file. For every match found:
- Read TASK-BRIEF.md (and TECHNICAL-CONTEXT.md if present)
- Execute the requested work
- Write results to CLAUDE-RESPONSE.md in that folder
- Rename .delegate-to-claude to .delegate-complete
- Remove .delegate-processing if present

If no pending tasks are found, output a single line: "Monitor: no pending tasks."`;

// In-memory store for task completion notifications (ring buffer, last 50)
const completions = [];

function scanForPendingTasks() {
  const pending = [];
  const STALE_MS = 5 * 60 * 1000; // 5 minutes
  const now = Date.now();

  for (const dir of WATCH_DIRS) {
    if (!fs.existsSync(dir)) continue;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const folder = path.join(dir, entry.name);
      const signal = path.join(folder, ".delegate-to-claude");
      const lockFile = path.join(folder, ".delegate-processing");
      const completeFile = path.join(folder, ".delegate-complete");

      if (!fs.existsSync(signal)) continue;
      if (fs.existsSync(completeFile)) continue;

      // Clear stale locks — if .delegate-processing is older than 5 min, remove it
      if (fs.existsSync(lockFile)) {
        const age = now - fs.statSync(lockFile).mtimeMs;
        if (age > STALE_MS) {
          try { fs.unlinkSync(lockFile); } catch (_) {}
        } else {
          continue; // actively being processed, skip
        }
      }

      pending.push(folder);
    }
  }
  return pending;
}

const server = new Server(
  { name: "nexus-bridge", version: "1.1.0" },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "trigger_handoff_check",
      description:
        "Scans AgenticNexus handoff directories for pending .delegate-to-claude tasks and invokes Claude Code to execute them. Call this after dropping a handoff task.",
      inputSchema: {
        type: "object",
        properties: {
          context: {
            type: "string",
            description: "Optional context or note (e.g. task summary).",
          },
        },
        required: [],
      },
    },
    {
      name: "check_task_status",
      description:
        "Check the status of a handoff task by task folder name. Returns whether it is pending, processing, or complete.",
      inputSchema: {
        type: "object",
        properties: {
          task_id: {
            type: "string",
            description: "The task folder name (e.g. 'my-task-20260325-010000').",
          },
        },
        required: ["task_id"],
      },
    },
    {
      name: "get_completions",
      description:
        "Returns the list of recently completed tasks that Claude has reported back. Use this to check if Claude has finished delegated work.",
      inputSchema: {
        type: "object",
        properties: {},
        required: [],
      },
    },
    {
      name: "notify_task_complete",
      description:
        "Called BY Claude Code after finishing a delegated task. Records the completion so Antigravity can retrieve it via get_completions.",
      inputSchema: {
        type: "object",
        properties: {
          task_id: { type: "string", description: "The task folder name." },
          summary: { type: "string", description: "Brief summary of what was done." },
          status: { type: "string", enum: ["success", "error"], description: "Outcome status." },
        },
        required: ["task_id", "status"],
      },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  if (name === "trigger_handoff_check") {
    const pending = scanForPendingTasks();

    if (pending.length === 0) {
      return {
        content: [{ type: "text", text: "No pending tasks found in any handoff directory." }],
      };
    }

    // Invoke Claude Code headlessly with full path + skip permissions
    const result = spawnSync(
      CLAUDE_CMD,
      ["-p", HANDOFF_PROMPT, "--dangerously-skip-permissions"],
      { encoding: "utf8", timeout: 300000, shell: true, windowsHide: true }
    );

    const output =
      (result.stdout || "").trim() ||
      (result.stderr || "").trim() ||
      `spawn error: ${result.error?.message || "unknown"}`;

    return {
      content: [
        {
          type: "text",
          text: `Found ${pending.length} pending task(s):\n${pending.map((p) => `  • ${p}`).join("\n")}\n\n--- Claude output ---\n${output}`,
        },
      ],
    };
  }

  if (name === "check_task_status") {
    const taskId = args?.task_id;
    let found = null;
    for (const dir of WATCH_DIRS) {
      const folder = path.join(dir, taskId);
      if (fs.existsSync(folder)) { found = folder; break; }
    }
    if (!found) {
      return { content: [{ type: "text", text: `Task '${taskId}' not found in any watch directory.` }] };
    }
    const isComplete = fs.existsSync(path.join(found, ".delegate-complete"));
    const isProcessing = fs.existsSync(path.join(found, ".delegate-processing"));
    const isPending = fs.existsSync(path.join(found, ".delegate-to-claude"));
    const status = isComplete ? "complete" : isProcessing ? "processing" : isPending ? "pending" : "unknown";
    return { content: [{ type: "text", text: `Task '${taskId}' status: ${status}` }] };
  }

  if (name === "get_completions") {
    if (completions.length === 0) {
      return { content: [{ type: "text", text: "No completions recorded yet." }] };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(completions, null, 2) }],
    };
  }

  if (name === "notify_task_complete") {
    const entry = {
      task_id: args?.task_id,
      status: args?.status,
      summary: args?.summary || "",
      timestamp: new Date().toISOString(),
    };
    completions.push(entry);
    if (completions.length > 50) completions.shift();
    return {
      content: [{ type: "text", text: `Completion recorded for task '${entry.task_id}' (${entry.status}).` }],
    };
  }

  throw new Error(`Unknown tool: ${name}`);
});

const transport = new StdioServerTransport();
await server.connect(transport);
