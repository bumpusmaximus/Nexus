# CLAUDE.md — QuiltCraft MVP
> Read this file completely before writing any code, creating any files, or making any plans.
> This is the authoritative source of truth for this project.

---

## Project Overview

**QuiltCraft** is a mobile-first web application that helps intermediate quilters design quilt block patterns and export them as machine-readable stitch files compatible with major sewing machine brands (Brother, Janome, Bernina, Husqvarna Viking, Singer).

The core user loop is:
1. Design a quilt layout on a block grid canvas
2. Choose block patterns, fabric colors, and rotation per cell
3. Select their sewing machine brand
4. Export the design as the correct stitch file format (.PES, .JEF, .EXP, .VP3, .XXX)
5. Transfer the file to their machine via Google Drive, email, or direct download

**Target user:** Intermediate hobbyist quilters, primarily on mobile (iOS/Android) but also desktop browser.

---

## Current Status

This project is at the **validated prototype stage**. A fully functional single-file HTML prototype has been built and iterated on in Claude.ai. The prototype includes:

- ✅ Interactive quilt block canvas (click/drag to paint)
- ✅ 6 block patterns: Half-Square Triangle, Quarter-Square, Log Cabin, Flying Geese, Pinwheel, Plain
- ✅ Per-cell rotation (0°, 90°, 180°, 270°) with live preview
- ✅ 10 fabric colors with swatch picker
- ✅ Flood fill tool, erase tool, undo
- ✅ Adjustable grid size (4×4 to 14×14)
- ✅ Machine brand selector → correct format badge (.PES, .JEF, etc.)
- ✅ Export modal with Google Drive, Email, and Download options
- ✅ Post-export step-by-step instructions per transfer method
- ✅ Modal escape via ✕ button, overlay click, or Escape key
- ✅ Live stitch preview (dark canvas showing stitch path visualization)
- ✅ Stats bar: block count, estimated stitch count, estimated machine time

**The prototype is a single HTML file** — all JS and CSS inline, no build step, no backend calls yet. Export actions are simulated (UI flow complete, no actual file generation or API calls).

---

## Immediate First Tasks for Claude Code

### 1. Project scaffold
```
quiltcraft/
├── CLAUDE.md                  ← this file
├── index.html                 ← the prototype (starting point)
├── src/
│   ├── app.js                 ← extract JS from prototype
│   ├── styles.css             ← extract CSS from prototype
│   ├── blocks.js              ← block pattern definitions + SVG renderers
│   ├── stitch-export.js       ← stitch file generation logic
│   └── transfer.js            ← Drive / email / download handlers
├── workers/
│   └── export-worker.js       ← Cloudflare Worker: generates stitch files server-side
├── public/
│   └── fonts/                 ← self-host Playfair Display + DM Sans if needed
└── wrangler.toml              ← Cloudflare Workers config
```

### 2. GitHub + Cloudflare Pages pipeline
- Create a GitHub repo named `quiltcraft`
- Connect to Cloudflare Pages (auto-deploy on push to `main`)
- The site should be a static deploy — `index.html` at root, no framework needed for MVP
- Set up branch previews so PRs get their own URL for client testing

### 3. Real stitch file export (the core engineering task)
The prototype simulates export. The real implementation needs a Cloudflare Worker that:
- Receives the grid state as JSON (block type, color, rotation per cell)
- Converts each block's visual geometry into X/Y stitch coordinate paths
- Outputs the correct binary stitch format based on machine brand
- Returns the file as a download stream

**Use `pyembroidery` logic as reference** for stitch coordinate math — the open-source Python library documents the DST/PES/JEF formats well even if we implement in JS.

**Start with DST format** — it is the most universal, simplest binary structure, and works across all major brands as a fallback. Then layer in PES (Brother) and JEF (Janome) as they cover ~70% of the target user base.

---

## Architecture Decisions (Do Not Revisit Without Good Reason)

| Decision | Choice | Rationale |
|---|---|---|
| Platform | Web (mobile-first, browser) | No app store friction for MVP validation |
| Framework | Vanilla JS → React Native later | Prototype is vanilla; keep it simple until validation complete |
| Hosting | Cloudflare Pages | Already in Bump's stack; free tier sufficient |
| Backend | Cloudflare Workers | Serverless, zero cold start, same ecosystem |
| Database | Cloudflare D1 | Already in Bump's stack; save user designs |
| Auth | Defer to post-MVP | No login required for validation phase |
| Export transfer | Google Drive + Email + Download | Mobile can't write USB directly; Drive is primary, email is fallback |
| File format priority | DST first, then PES, JEF | DST = universal; PES/JEF = covers ~70% of users |
| Design storage | localStorage for MVP | No backend needed until auth is added |

---

## Machine File Format Reference

| Brand | Format | Notes |
|---|---|---|
| Brother / Baby Lock | `.PES` | Most common; well-documented open format |
| Janome | `.JEF` | Second most common |
| Bernina | `.EXP` | No color metadata; stitches only |
| Husqvarna Viking / Pfaff | `.VP3` | Proprietary but decodable |
| Singer | `.XXX` | Less common |
| Universal fallback | `.DST` | Works on most machines; no color info |

**Transfer method to machine:** All machines accept USB stick. User exports file → transfers to USB on their PC → plugs USB into machine. No direct mobile-to-machine transfer is supported in MVP.

---

## Export Flow (Detailed)

```
User taps "Export to Machine"
    ↓
Modal opens → shows machine brand + format
    ↓
User selects transfer method:
    [Google Drive]  →  POST grid JSON to Worker  →  Worker generates file
                   →  Upload to user's Drive via Google Drive API
                   →  Show confirmation + step-by-step instructions

    [Email]         →  POST grid JSON to Worker  →  Worker generates file
                   →  Send via Gmail API as attachment
                   →  Show confirmation + step-by-step instructions

    [Download]      →  POST grid JSON to Worker  →  Worker generates file
                   →  Stream file to browser as download
                   →  Show confirmation + step-by-step instructions
```

**Google Drive MCP:** Bump has Google Drive MCP connected. Use this for the Drive upload path.
**Gmail MCP:** Bump has Gmail MCP connected. Use this for the email path.
**Cloudflare MCP:** Bump has Cloudflare Developer Platform MCP connected. Use for Worker deployment.

---

## Grid State Data Model

Every cell in the quilt grid stores this object (or `null` if empty):

```javascript
{
  block: 0,          // index into BLOCKS array (0-5)
  color: '#2D7D6F',  // primary fabric color (hex)
  color2: '#EDE8DF', // secondary/background color (hex)
  rotation: 90       // degrees: 0 | 90 | 180 | 270
}
```

The full grid state exported to the Worker:

```javascript
{
  cols: 8,
  rows: 8,
  cellSize: 42,       // px per cell in the prototype
  machine: 'brother', // selected machine brand key
  grid: [[cell, cell, ...], [...]]  // rows × cols 2D array
}
```

---

## Block Pattern Definitions

| Index | Name | Description |
|---|---|---|
| 0 | Half-Square Triangle | Diagonal split; triangle in primary color |
| 1 | Quarter-Square | Two opposite corner triangles |
| 2 | Log Cabin | Concentric squares; nested rings |
| 3 | Flying Geese | Single triangle pointing up |
| 4 | Pinwheel | Four triangles radiating from center |
| 5 | Plain | Solid fill; no internal geometry |

Each block's SVG renderer takes `(rotation, primaryColor, secondaryColor)` and returns an inline SVG string. Rotation is applied via point transformation (not CSS transform) for accurate stitch path math.

---

## Design System & Visual Identity

**App name:** QuiltCraft

**Fonts:**
- Display: `Playfair Display` (serif) — used for app title and modal headings
- Body/UI: `DM Sans` — used for all UI elements

**Color palette:**
```css
--cream: #FAF8F3          /* app background */
--warm-white: #FFFDF9     /* panel backgrounds */
--thread-gold: #C9963A    /* primary CTA (export button) */
--thread-gold-light: #F0D9A8
--fabric-teal: #2D7D6F    /* active states, badges, accents */
--fabric-teal-light: #E1F5EE
--fabric-navy: #1E3A5F    /* top bar, modal header */
--ink: #1A1510            /* primary text */
--ink-muted: #6B6358      /* secondary text, labels */
--border: rgba(26,21,16,0.12)
--border-strong: rgba(26,21,16,0.25)
```

**Fabric color swatches (user palette):**
```
#2D7D6F  #C9963A  #C25B6A  #1E3A5F  #5C8A6A
#C05A32  #7A6BAE  #EDE8DF  #8B7355  #D4A5A5
```

---

## What Is NOT In Scope for MVP

Do not build these until explicitly asked:

- ❌ User accounts / authentication
- ❌ Cloud design library / saving designs to backend
- ❌ Community / sharing designs with other users
- ❌ Custom stitch creation (beyond the 6 built-in blocks)
- ❌ Embroidery design import / conversion from other formats
- ❌ Direct Wi-Fi transfer to machine
- ❌ Native mobile app (React Native)
- ❌ Embroidery (this is quilting stitch paths only)
- ❌ Print / PDF export of quilt layout

---

## Deployment

**Target URL:** Cloudflare Pages (URL TBD after repo creation)

**Deploy command:** `git push origin main` → auto-deploy via Cloudflare Pages GitHub integration

**Worker deploy:** `wrangler deploy` from `/workers/` directory

**Environment variables needed (set in Cloudflare dashboard):**
```
GOOGLE_OAUTH_TOKEN    ← for Drive + Gmail API calls
```

---

## Research Before Planning Rule

Before implementing any new feature, Claude Code MUST:
1. Re-read this CLAUDE.md fully
2. Check existing code for relevant patterns before writing new ones
3. Confirm the stitch format spec against pyembroidery source or libembroidery docs before writing binary output logic
4. Verify Cloudflare Worker limits (CPU time, request size) before designing the export Worker

---

## Key External References

- pyembroidery format docs: https://github.com/EmbroidePy/pyembroidery
- Cloudflare Workers docs: https://developers.cloudflare.com/workers/
- Cloudflare Pages docs: https://developers.cloudflare.com/pages/
- PES format reference: http://www.achatina.de/sewing/main/TECHNICL.HTM
- DST format reference: https://edutechwiki.unige.ch/en/Embroidery_format_DST

---

*Last updated: March 2026 — Generated from Claude.ai MVP session*
*Hand off to Claude Code when GitHub repo and Cloudflare Pages connection are ready*
