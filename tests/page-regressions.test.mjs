import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";

const root = process.cwd();
const packagePath = path.join(root, "package.json");
const configPath = path.join(root, "next.config.ts");
const layoutPath = path.join(root, "app", "layout.tsx");
const pagePath = path.join(root, "app", "page.tsx");
const menuPath = path.join(root, "app", "mobile-menu.tsx");
const cssPath = path.join(root, "app", "globals.css");

function readProjectFile(filePath) {
  return readFileSync(filePath, "utf8");
}

function extractHeroSection(source) {
  const heroStart = source.indexOf('id="top"');
  const nextSectionStart = source.indexOf('<section id="tratamente"');

  assert.notEqual(heroStart, -1, "the page should keep a top hero section");
  assert.notEqual(nextSectionStart, -1, "the page should keep the treatments section after the hero");

  return source.slice(heroStart, nextSectionStart);
}

test("development scripts avoid the Turbopack resolver panic path", () => {
  const packageJson = JSON.parse(readProjectFile(packagePath));
  const config = readProjectFile(configPath);

  assert.match(packageJson.scripts.dev, /next dev --webpack/, "dev should use Webpack until the Turbopack resolver panic is gone");
  assert.match(packageJson.scripts.build, /next build --webpack/, "build should use the same stable bundler path as dev");
  assert.doesNotMatch(config, /turbopack:\s*\{/, "the app should not override Turbopack root resolution");
});

test("hero does not pin a second editorial image over the bottom of the first viewport", () => {
  const source = readProjectFile(pagePath);
  const hero = extractHeroSection(source);

  assert.doesNotMatch(hero, /absolute\s+bottom-\[/, "hero should not contain a bottom-pinned image overlay");
  assert.match(source, /id="organic-band"/, "the hero should still flow into the promised organic transition band");
});

test("mobile menu is an isolated client component with accessible open state", () => {
  const pageSource = readProjectFile(pagePath);

  assert.ok(existsSync(menuPath), "mobile menu should be implemented as a dedicated client component");
  assert.match(pageSource, /import\s+MobileMenu\s+from\s+"\.\/mobile-menu"/, "page should import the client menu component");
  assert.match(pageSource, /<MobileMenu\s*\/>/, "header should render the mobile menu component");

  const menuSource = readProjectFile(menuPath);

  assert.match(menuSource, /^"use client";/, "menu component should declare the client boundary");
  assert.match(menuSource, /useState/, "menu component should keep open and closed state");
  assert.match(menuSource, /aria-expanded=\{isMenuOpen\}/, "menu button should expose its current state");
  assert.match(menuSource, /id="mobile-menu"/, "menu panel should have a stable accessible id");
});

test("above-fold imagery uses current Next image loading props and responsive sizing", () => {
  const source = readProjectFile(pagePath);

  assert.doesNotMatch(source, /\spriority\b/, "Next 16 deprecates priority in favor of preload or fetchPriority");
  assert.match(source, /preload/, "the LCP hero image should be preloaded");
  assert.doesNotMatch(source, /fetchPriority="high"/, "preload should not be combined with fetchPriority on the same image");
  assert.match(source, /sizes="100vw"/, "the full-bleed hero image should declare a 100vw responsive size");
});

test("generated local media replaces remote stock imagery", () => {
  const source = readProjectFile(pagePath);
  const config = readProjectFile(configPath);
  const layout = readProjectFile(layoutPath);

  assert.doesNotMatch(source, /images\.unsplash\.com/, "page imagery should not depend on recognizable Unsplash stock photos");
  assert.doesNotMatch(config, /remotePatterns/, "remote image allowlists should stay removed while media is local");
  assert.match(source, /id="organic-band"/, "the hero should lead into the promised organic visual band");
  assert.match(source, /id="clinica"/, "the page should include location-proof clinic imagery before the team section");
  assert.match(layout, /opengraph-image\.jpg/, "metadata should point social previews at the generated OG image");

  [
    ["hero-consult.jpg", "hero consult image"],
    ["organic-band.jpg", "organic band image"],
    ["clinic-exterior.jpg", "clinic exterior image"],
    ["logomark.svg", "monogram SVG"],
  ].forEach(([fileName, label]) => {
    assert.ok(existsSync(path.join(root, "public", "media", fileName)), `${label} should exist in public/media`);
  });

  [
    ["opengraph-image.jpg", "Open Graph image"],
    ["apple-icon.png", "Apple touch icon"],
    ["favicon.ico", "favicon"],
  ].forEach(([fileName, label]) => {
    assert.ok(existsSync(path.join(root, "app", fileName)), `${label} should exist in app metadata files`);
  });
});

test("motion that auto-starts has a visible user pause control", () => {
  const source = readProjectFile(pagePath);
  const css = readProjectFile(cssPath);

  assert.match(source, /id="pause-treatment-rail"/, "the treatment rail should expose a stable pause toggle");
  assert.match(source, /type="checkbox"/, "the pause control should be a native toggle when no JavaScript is needed");
  assert.match(source, /aria-label="Oprește mișcarea caruselului de tratamente"/, "the pause toggle should explain the moving region it controls");
  assert.match(css, /\.treatment-rail-toggle:checked\s*~\s*\.treatment-rail/, "checking the toggle should pause the rail animation");
});

test("contact and footer links keep accessible semantics and touch targets", () => {
  const source = readProjectFile(pagePath);
  const footerStart = source.indexOf('<footer id="contact"');

  assert.notEqual(footerStart, -1, "the page should keep a contact footer");

  const footer = source.slice(footerStart);

  assert.match(source, /<address/, "contact details should use address semantics");
  assert.match(source, /href="tel:\+\d+"/, "the phone number should be tappable on mobile");
  assert.match(source, /<nav[\s\S]*aria-label="Lista serviciilor"/, "footer service links should be grouped in a labelled nav");
  assert.match(source, /<ul className="flex flex-wrap/, "footer service links should use list semantics");
  assert.match(source, /min-h-11/, "footer and inline CTAs should provide practical touch targets");
  assert.doesNotMatch(footer, /" \| "/, "footer separators should not be exposed as text content");
});

test("repeated links and decorative images have non-redundant accessible text", () => {
  const source = readProjectFile(pagePath);

  assert.match(source, /aria-label=\{`Programare pentru consult: \$\{service\.title\}`\}/, "service CTAs should include the service title in their accessible name");
  assert.match(source, /aria-label=\{`Programare pentru consult: \$\{article\.title\}`\}/, "article CTAs should include the article title in their accessible name");
  assert.match(source, /<Image\s+src=\{service\.image\}\s+alt=""/, "service tile imagery should be decorative when the heading already labels the tile");
  assert.match(source, /<Image\s+src=\{article\.image\}\s+alt=""/, "article thumbnails should be decorative when the adjacent title labels the row");
});

test("text accents use an AA contrast token on pale surfaces", () => {
  const source = readProjectFile(pagePath);
  const menuSource = readProjectFile(menuPath);
  const css = readProjectFile(cssPath);

  assert.match(css, /--coral-accessible:/, "a darker coral token should be available for text and focus states");
  assert.match(css, /outline:\s*2px solid var\(--coral-accessible\)/, "focus outlines should use the AA contrast accent");
  assert.doesNotMatch(source, /hover:text-\[var\(--coral\)\]/, "page text hover states on pale surfaces should not use low-contrast coral");
  assert.doesNotMatch(menuSource, /hover:text-\[var\(--coral\)\]/, "mobile menu hover states should not use low-contrast coral");
});

test("tablet testimonial layout avoids a single long column", () => {
  const source = readProjectFile(pagePath);

  assert.match(source, /mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3/, "testimonials should move to two columns on tablet before three columns on desktop");
});
