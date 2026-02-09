# Prime Motors Landing Page

## Tech Stack
- React 19 + Vite (static SPA)
- Tailwind CSS v4 (with `@tailwindcss/vite` plugin, `@custom-variant dark` for dark mode)
- react-i18next (EN/RO/RU) with browser language detection
- Framer Motion (animations)
- pnpm (package manager)
- gh-pages (deployment)

## Project Structure
- `src/components/` — All UI components (Navbar, Hero, Services, Hours, Location, Contact, Footer, FloatingCallButton, ThemeToggle, LanguageSwitcher)
- `src/i18n/` — i18next config + translation files (en.json, ro.json, ru.json)
- `src/hooks/useTheme.js` — Dark/light mode hook with localStorage persistence
- `public/` — favicon.svg, CNAME

## Commands
- `pnpm dev` — Start dev server
- `pnpm build` — Production build
- `pnpm deploy` — Build + deploy to GitHub Pages

## Business Data
- Phone: +373 60004260
- Email: contact@primemotors.md
- Address: str. Uzinelor 104, Chișinău, Moldova
- Hours: Mon–Fri 09:00–18:00, Sat 09:00–13:00, Sun Closed

## Notes
- Tailwind v4 uses `@theme` block in `src/index.css` for custom colors (no tailwind.config.js)
- Dark mode uses `class` strategy via `@custom-variant dark`
- Facebook Pixel + GTM load conditionally from env vars (`VITE_FACEBOOK_PIXEL_ID`, `VITE_GTM_ID`)
- `.env` is gitignored; `.env.example` is the template
- Vite base path set to `/prime-motors-landing-v2/` for GitHub Pages
- Do not add Co-Authored-By to commits
