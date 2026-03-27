# AgenticNexus Handoff Protocol — Standard v2.0

## TASK-BRIEF.md Format

```markdown
# ⚡ NEW TASK — SCAN REQUIRED
**This is a fresh, unprocessed handoff. Do not assume stale.**

---

**Task ID**: [YYYYMMDD-HHMMSS-task-slug]  
**Nonce**: [random 8-char hex]  
**Timestamp**: [ISO 8601]  
**Delegated By**: Antigravity (Orchestrator)

## Objective
[Clear description of the task]

## Instructions
[Step-by-step instructions]

## Success Criteria
[What Claude should produce/write to confirm completion]
```

## .delegate-to-claude Format

```json
{
  "task_id": "[YYYYMMDD-HHMMSS-task-slug]",
  "nonce": "[random 8-char hex — must be unique per task]",
  "timestamp": "[ISO 8601]",
  "is_fresh": true,
  "priority": "high|normal|low",
  "action": "[Single-sentence description of what Claude must do]"
}
```

## Protocol Rules
- **Claude must always scan the directory before deciding if a task is stale.**
- **The `nonce` field guarantees uniqueness — if the nonce is new, the task is new.**
- **Antigravity will always include `is_fresh: true` in the trigger JSON.**
