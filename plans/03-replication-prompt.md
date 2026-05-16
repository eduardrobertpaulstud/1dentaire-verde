# Phase 3 Replication Prompt

Role: Act as a World-Class Senior Creative Technologist and Lead Frontend Engineer.

Aesthetic Identity: Grounded Bucharest Dental Care In Motion.

Build a Next.js App Router and Tailwind CSS v4 landing page for Clinica Dentaire Verde, a fictional dental clinic in Bucharest. Clone the structural style of mazecenter.ro without copying its brand, assets, or mental-health content.

Core Design System:
- Ink #050505 for header CTA, carousel, footer, and high-contrast anchors.
- Paper #fbfaf7 and white #fefdfb for warm clinical space.
- Coral #ed6a5e for tiny active accents and hover states.
- Clinic blue #111e70 for black-to-blue gradient sections.
- Sage #7ba7a2 for restrained dental wellness cues.
- Typography: Poppins-like heading geometry, Open Sans-like body, Roboto-like uppercase button labels. Preserve large centered hero contrast and tight tracking.
- Radius: 0px buttons, nearly square image cards.
- Shadow: avoid visible shadows. Depth comes from photography, gradient, spacing.

Component Architecture:
1. The White Intake Bar: 80px white header, logo left, menu glyph center/right, black square CTA reading Programeaza-te.
2. The Photographic Care Hero: full-bleed dental clinic photo, centered white lowercase hero, smaller lower line, down arrow, wide organic image band.
3. The Slow Treatment Rail: black section, duplicated horizontal rail of tall treatment cards, portrait images, white titles, body text, dot navigation.
4. The Blue-Black Clinical Manifesto: gradient section with centered logo, large h2, warm paragraph, three direct text columns.
5. The Treatment Tile Archive: paper background, eyebrow, large heading, tall image-led service tiles with plain text CTAs.
6. The Human Clinic Block: light gray background, about copy and clinician/plant imagery without boxed cards.
7. The Editorial Hygiene Journal: article intro and four blog rows with image, title, date separator, read more.
8. The Trust And Legal Footer: quote carousel feel and dense link-heavy footer.

Interactions:
- Hero load fade-up: 900ms cubic-bezier(0.22,1,0.36,1).
- CTA hover: black to coral over 260ms cubic-bezier(0.22,1,0.36,1).
- Image card hover: scale image to 1.045 over 700ms cubic-bezier(0.22,1,0.36,1).
- Treatment rail: CSS keyframes translate duplicated row left over 32s linear infinite.
- Respect prefers-reduced-motion.

Technical Requirements:
- Stack: Next.js 16 App Router, TypeScript, Tailwind CSS v4.
- Animation: CSS keyframes and transitions only.
- Font loading: CSS/system stack matching Poppins, Open Sans, Roboto shapes.
- Images: external Unsplash URLs used through CSS backgrounds or standard image elements.
- Accessibility: semantic sections, aria labels, alt text, visible focus states, no horizontal body scroll.

*Build it like a clinic that earned trust slowly, one clear sentence and one careful gesture at a time.*
