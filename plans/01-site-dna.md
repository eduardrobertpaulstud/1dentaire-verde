AUDIT_MODE: high-fidelity

## SITE DNA

### Page Architecture
Reference: https://mazecenter.ro/

Strategy used: Elementor top-level `div.e-con` blocks under `main > article` because the site does not rely on semantic section tags.

```text
PAGE ARCHITECTURE: MAZE Center
Total visual sections: 8
+------------------------------------------------------+
| SECTION 1: Header                     HEIGHT: 80px   |
| BG: white, left logo, black square CTA, menu glyph    |
| LAYOUT: full-width flex, approx 40px side gutters     |
+------------------------------------------------------+
| SECTION 2: Hero                       HEIGHT: ~986px  |
| BG: full-bleed photo, centered white text, earth band |
| LAYOUT: vertical center, large spacer, oversized image|
+------------------------------------------------------+
| SECTION 3: Featured Carousel          HEIGHT: ~881px  |
| BG: #050505 black, tall portrait cards, bullets       |
| LAYOUT: horizontal Swiper, 299x448 images on tablet   |
+------------------------------------------------------+
| SECTION 4: Manifesto + Vision         HEIGHT: ~1105px |
| BG: black to deep blue vertical gradient              |
| LAYOUT: centered logo, large h2, body, 3 text columns |
+------------------------------------------------------+
| SECTION 5: Services                   HEIGHT: ~1366px |
| BG: paper/white, uppercase eyebrow, tall service tiles|
| LAYOUT: two-column cards desktop, stacked tablet      |
+------------------------------------------------------+
| SECTION 6: Team/About                 HEIGHT: ~773px  |
| BG: #f7f7f7, text left, portrait cluster/image band   |
| LAYOUT: unboxed text and organic imagery              |
+------------------------------------------------------+
| SECTION 7: Articles                   HEIGHT: ~1800px |
| BG: white, intro left, blog list with thumbnails      |
| LAYOUT: editorial list, dates use /// separators      |
+------------------------------------------------------+
| SECTION 8: Testimonials + Footer      HEIGHT: ~1100px |
| BG: white then dark footer, quote carousel, dense links|
| LAYOUT: wide quotes, footer link run-on density       |
+------------------------------------------------------+
```

### Design Tokens

```text
PALETTE
  Ink Black: rgb(0,0,0) / #050505 -> header CTA, carousel background, footer
  Text Charcoal: rgb(34,34,34) / #222222 -> body text
  White: rgb(255,255,255) / #ffffff -> hero text, card text, footer text
  Soft Gray: rgb(247,247,247) / #f7f7f7 -> team/about background
  Coral: rgb(237,106,94) / #ed6a5e -> small link accent
  Deep Blue: rgb(29,9,136) and #111e70 -> lower gradient section
  Muted Gray: rgb(122,122,122) -> metadata, secondary text

TYPOGRAPHY SCALE
  Display/Hero | Poppins, sans-serif | 500 | 45px tablet, larger desktop | -2px | 1.1 | lowercase line breaks
  H1 hidden SEO | Poppins | 700 | 1px | 0 | 1 | visually hidden
  H2 section | Poppins | 600 | 44-64px | -1px | 1.05 | mixed case
  H3 card | Poppins | 600 | 20-24px | 0 | 1.1 | capitalize or title case
  Body | Open Sans | 400 | 16px | 0 | 1.49 | warm paragraphs
  Button | Roboto | 300 | 14px | 1.53px | 1.3 | uppercase
  Footer | Open Sans | 400 | 13-16px | 0 | 1.5 | dense links

DRAMA NOTE
  The reference drama comes from very large, centered white Poppins over photography, then sudden severe black carousel sections and long breathing spaces. Preserve the hard tonal jumps and sparse button styling.

BORDER RADIUS
  Buttons: 0px. Cards/images: 0px to 2px. Avoid pill buttons except tiny carousel dots.

SHADOW SYSTEM
  Almost none. Depth comes from photography, gradient, and spacing, not drop shadows.
```

### Section Blueprints

Hero composition: centered lowercase two-line heading near upper-middle, smaller uppercase-ish line lower, down arrow, then oversized wide organic PNG band bleeding horizontally. Dental adaptation uses a real clinic photo as background plus an abstract mouth-care product band.

Featured carousel: black background with tall vertical cards. Each card has portrait image first, white link title below, then white body copy. Bullets sit outside, small circular dots.

Manifesto: black-to-deep-blue gradient. White logo mark, large philosophical h2, a long human paragraph, then three columns named Viziunea noastra, Misiunea noastra, Procesul nostru. No cards. Text floats directly on gradient.

Services: paper background. Uppercase eyebrow, large service heading, tall image tiles with text overlay/underlay and plain outline-free CTAs.

Team/About: light gray block. Two headings, sincere paragraph fragments, CTA, and a visual strip of clinician portraits/plants.

Articles: editorial heading, compact explanatory copy, four blog rows with images, title, date, comment count, and read-more link.

Testimonials: eyebrow, large trust headline, three long Google-style quotes. Footer is dense, legalistic, link-heavy.

### Interaction And Motion

```text
ANIMATION: Hero Load Drift
Trigger: page-load
TIMELINE:
  t=0ms   hero heading FROM opacity:0 transform:translateY(24px)
  t=180ms hero heading TO opacity:1 transform:translateY(0) DURATION:900ms EASING:cubic-bezier(0.22,1,0.36,1)
  t=320ms hero subheading TO opacity:1 transform:translateY(0) DURATION:800ms EASING:cubic-bezier(0.22,1,0.36,1)
  t=700ms wide lower image TO opacity:1 transform:translateY(0) DURATION:900ms EASING:cubic-bezier(0.22,1,0.36,1)
```

```text
INTERACTION: Header CTA
DEFAULT | bg:#050505 | color:#ffffff | transform:none | border:0 | radius:0
HOVER   | bg:#ed6a5e | color:#ffffff | transform:none | border:0 | radius:0
DURATION: 260ms EASING:cubic-bezier(0.22,1,0.36,1)
```

```text
INTERACTION: Image Card
DEFAULT | image scale(1) | overlay opacity .38 | text white
HOVER   | image scale(1.045) | overlay opacity .50 | title color #ffffff
DURATION: 700ms EASING:cubic-bezier(0.22,1,0.36,1)
```

```text
STATE MACHINE: Horizontal Featured Rail
Type: auto-interval visual loop
State A: row begins at x=0, 8 tall cards visible/partially visible
State B: row translates left by roughly 50 percent over 32 seconds
Transition: CSS keyframes, linear, infinite
Reset: duplicate card array makes seam invisible
```

### Technical Stack Detected

Reference uses WordPress, Elementor, Swiper carousel, Google Fonts (Poppins, Open Sans, Roboto), Font Awesome/eicons, and mostly CSS/Elementor motion. Clone uses Next.js App Router, TypeScript, Tailwind CSS v4, CSS keyframes.

### Motion Philosophy And Copy Voice

Motion is functional and soft, mostly page-load fade and carousel drift. The emotional state is quiet trust: large pauses, gentle movement, and no decorative bounce. Copy is Romanian, warm, direct, and human. It uses fragments and grounded care language: short reassuring lines, service categories, and honest descriptions rather than polished sales slogans.
