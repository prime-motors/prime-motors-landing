# Prime Motors

Landing page for **Prime Motors** — a professional auto repair and diagnostics service in Chișinău, Moldova, specializing in hybrid, electric, and modern vehicles.

🌐 **Live site:** [primemotors.md](https://primemotors.md)

## Features

- Responsive design optimized for all screen sizes
- Dark / light mode with system preference detection
- Multilingual support (English, Romanian, Russian)
- Smooth scroll animations powered by Framer Motion
- Click-to-call buttons for instant contact
- Embedded Google Maps location
- Facebook Pixel & Google Tag Manager (optional, via env vars)
- SPA routing with a custom 404 page

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) (build tool)
- [Tailwind CSS v4](https://tailwindcss.com/) (with `@tailwindcss/vite` plugin)
- [Framer Motion](https://www.framer.com/motion/) (animations)
- [react-i18next](https://react.i18next.com/) (internationalization)
- [React Router](https://reactrouter.com/) (client-side routing)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 18
- [pnpm](https://pnpm.io/) >= 9

### Install & Run

```bash
pnpm install
pnpm dev
```

The dev server starts at `http://localhost:5173`.

## Commands

| Command          | Description                           |
| ---------------- | ------------------------------------- |
| `pnpm dev`       | Start development server              |
| `pnpm build`     | Type-check + production build         |
| `pnpm typecheck` | Run TypeScript type checking          |
| `pnpm lint`      | Run ESLint (includes Prettier checks) |
| `pnpm format`    | Format all files with Prettier        |
| `pnpm preview`   | Preview the production build locally  |

## Environment Variables

Copy `.env.example` to `.env` and fill in the values:

```
VITE_FACEBOOK_PIXEL_ID=
VITE_GTM_ID=
```

Both are optional — tracking scripts only load when values are provided.

## Deployment

The site deploys automatically via **GitHub Actions** on every push to `main`. It is hosted on **GitHub Pages** with the custom domain `primemotors.md`.

## Project Structure

```
src/
├── components/     # UI components (Navbar, Hero, Services, Hours, etc.)
├── hooks/          # Custom hooks (useTheme)
├── i18n/           # i18next config + translation files (en, ro, ru)
├── pages/          # Page components (HomePage, NotFoundPage)
├── App.tsx         # Router shell
├── main.tsx        # Entry point
├── index.css       # Tailwind v4 theme + global styles
└── types.ts        # Shared TypeScript types
public/
├── images/         # Background images
├── android/        # Android icons
├── favicon.png     # PNG favicon
├── favicon.ico     # ICO favicon
├── apple-icon.png  # Apple touch icon
└── site.webmanifest
```

## Contact

- **Phone:** +373 60004260
- **Email:** contact@primemotors.md
- **Address:** str. Uzinelor 104, Chișinău, Moldova
