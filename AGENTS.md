# AGENTS.md — AI Agent Guidelines

This file tells AI coding agents (Claude Code, Cursor, Copilot, etc.) how to work effectively in this repository.

## Repository overview

Static portfolio site. No build pipeline, no package manager for production code. Node.js is used only for local dev tooling (`serve.mjs`, `screenshot.mjs`).

## Key files

| File | Purpose |
|------|---------|
| `CLAUDE.md` | Primary rules for Claude Code — **read this first** |
| `serve.mjs` | Local dev server (port 3000) |
| `screenshot.mjs` | Puppeteer screenshots for visual review |
| `styles.css` | Global CSS shared across all pages |
| `nav.js` | Navigation injected on every page |
| `brand_assets/` | Logos, photos, color references — use before inventing assets |

## Rules for agents

### Always do first
- Read `CLAUDE.md` before writing any frontend code.
- Check `brand_assets/` before using placeholder images or colors.

### Server
- Start local server with `node serve.mjs` before taking screenshots.
- Do not start a second server if one is already running on port 3000.
- Screenshot via `node screenshot.mjs http://localhost:3000/path label`.

### File conventions
- All pages are single `index.html` files with inline styles.
- Do not introduce a build step, bundler, or package.json dependency without explicit instruction.
- Prefer editing existing files over creating new ones.

### Design
- Match the existing design language: dark backgrounds (`#0D0E10`), Prime Blue (`#00A8E1`), DM Sans body, Bebas Neue display.
- Do not use default Tailwind blue/indigo as a primary color on any page.
- Do not add sections, features, or copy not present in the reference or requested by the user.

### Demo pages (`/project-amazon-prime-persona/demo/`)
- The demo is a single unified file (`demo/index.html`) that serves both desktop and mobile via device detection at runtime.
- Device class (`is-desktop` / `is-mobile`) is set on `<html>` by a script at the top of `<body>`.
- YouTube IFrame API controls the video background. `onYouTubeIframeAPIReady` is defined in the main `<script>` block and the API script tag follows immediately after.
- Clip constants: `CLIP_START=323` (5:23), `CLIP_END=371` (6:11), `TD_TRIGGER=340` (5:40).
- The Prime Persona panel (`openPanel()` desktop / `openSheet()` mobile) triggers automatically at `TD_TRIGGER`.

### Commits
- Create commits only when explicitly asked.
- Use concise, descriptive commit messages.
- Do not force-push or amend published commits.
