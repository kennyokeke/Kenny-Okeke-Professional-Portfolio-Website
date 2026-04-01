# kennyokeke.com — Portfolio Website

Personal portfolio site for Kenny Okeke, Product Manager. Built as a static site served from the repository root.

## Structure

```
/                          → Homepage (index.html)
/projects/                 → Projects index
/project-amazon-prime-persona/
  index.html               → Case study page
  demo/index.html          → Interactive demo (desktop + mobile, unified)
  demo-mobile/index.html   → Standalone mobile demo
  og-image.png             → Open Graph card image (1200×630)
/styles.css                → Global styles
/nav.js                    → Navigation component
/main.js                   → Shared JS (scroll reveals, etc.)
/brand_assets/             → Logos, team icons, player photos
/files/                    → PDFs (PRDs, case study docs)
```

## Local Development

Requires Node.js.

```bash
node serve.mjs             # Serves at http://localhost:3000
```

## Screenshots (for design review)

```bash
node screenshot.mjs http://localhost:3000
node screenshot.mjs http://localhost:3000/project-amazon-prime-persona/demo label
```

Screenshots are saved to `./temporary screenshots/screenshot-N[-label].png`.

## Projects

### Amazon Prime Persona
An interactive demo of a Prime Video feature concept that surfaces talent-driven content from Twitch, Amazon Music, and Audible during live sports broadcasts.

- **Demo**: `/project-amazon-prime-persona/demo/`
- **Case study**: `/project-amazon-prime-persona/`
- **PRD**: `/files/amazon-prime-persona-prd.pdf`

The demo embeds a live YouTube clip (Ravens vs. Bengals TNF broadcast) and auto-triggers the Prime Persona panel at the 5:40 mark (when the touchdown occurs), on both desktop and mobile.

## Tech

- Vanilla HTML/CSS/JS, no build step
- Google Fonts (DM Sans, Bebas Neue)
- Puppeteer (dev only, for screenshots)
- YouTube IFrame API (Prime Persona demo)
- Google Analytics (G-Z32VK8XXGQ)
