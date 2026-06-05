# Sarva — Landing Page

Marketing site for **Sarva**, a specialized multimodal data collection company
providing real-world training data for AI, robotics and frontier research.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4** and
**Framer Motion**. Designed to deploy on **Vercel** out of the box.

## Stack

- Next.js 15 (App Router, React 19)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Google Fonts via `next/font` (Space Grotesk · Inter · JetBrains Mono)

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description               |
| --------------- | ------------------------- |
| `npm run dev`   | Start the dev server      |
| `npm run build` | Production build          |
| `npm run start` | Serve the production build |
| `npm run lint`  | Run ESLint                |

## Deploy

Push to GitHub and import the repo into Vercel — no extra configuration needed.
Framework preset: **Next.js**.

## Project structure

```
src/
  app/
    layout.tsx      # fonts, metadata, global styles
    page.tsx        # section composition
    globals.css     # theme tokens + utilities
  components/        # Hero, Modalities, Reach, Process, Closing, ...
```

## Design notes

A custom "field instrument / signal ledger" aesthetic — warm near-black canvas,
amber signal accent, monospace data labels, blueprint grids and a live capture
readout — rather than a generic card layout. Edit theme tokens in
`src/app/globals.css` (`@theme`).
