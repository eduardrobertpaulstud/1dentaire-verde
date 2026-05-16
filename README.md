# Clinica Dentaire Verde

A Next.js and Tailwind CSS portfolio demo that adapts the visual language of `mazecenter.ro` into a fictional dental clinic from Bucharest, Romania.

The page uses a stark white header, black appointment CTA, full-bleed photographic hero, black treatment rail, blue-black manifesto section, image-led service blocks, editorial article rows, testimonials, and a dense footer to preserve the reference site's human-made rhythm.

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

- `npm run dev` starts the local development server.
- `npm run lint` runs ESLint.
- `npm run build` creates a production build.

## Project Notes

- Main route: `app/page.tsx`.
- Global theme and motion: `app/globals.css`.
- Reference audit and adaptation notes: `plans/`.
- Fictional brand context: `PRODUCT.md` and `DESIGN.md`.

Images are loaded from Unsplash through the Next image remote pattern in `next.config.ts`.
