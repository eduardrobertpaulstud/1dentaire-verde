"use client";

import { useEffect, useRef, useState } from "react";

const menuLinks = [
  { label: "Servicii", href: "#servicii" },
  { label: "Prețuri", href: "#preturi" },
  { label: "Echipa", href: "#echipa" },
  { label: "Articole", href: "#articole" },
  { label: "Contact", href: "#contact" },
];

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    if (!isMenuOpen) {
      if (wasOpenRef.current) {
        toggleRef.current?.focus({ preventScroll: true });
        wasOpenRef.current = false;
      }
      return;
    }

    wasOpenRef.current = true;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        return;
      }
      if (event.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement;
        if (event.shiftKey && active === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && active === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        className="relative flex h-11 w-11 items-center justify-center"
        aria-label={isMenuOpen ? "Închide meniul" : "Deschide meniul"}
        aria-controls="mobile-menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <span className="flex w-6 flex-col gap-1.5" aria-hidden="true">
          <span className={`h-px bg-[var(--ink)] transition-transform duration-300 ${isMenuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-px bg-[var(--ink)] transition-opacity duration-200 ${isMenuOpen ? "opacity-0" : ""}`} />
          <span className={`h-px bg-[var(--ink)] transition-transform duration-300 ${isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </span>
      </button>

      <div
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Meniu principal"
        className={`fixed inset-x-0 bottom-0 top-20 z-40 overflow-y-auto border-t border-[var(--line-on-paper)] bg-[var(--white-soft)] px-5 py-6 shadow-[var(--shadow-paper)] transition duration-300 ease-[var(--ease-out-editorial)] ${
          isMenuOpen ? "visible pointer-events-auto translate-y-0 opacity-100" : "invisible pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <nav className="grid gap-1 font-display text-[15px] font-semibold uppercase tracking-[0.14em] text-[var(--ink)]" aria-label="Navigație mobilă">
          {menuLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex min-h-12 items-center justify-between border-b border-[var(--line-on-paper-soft)] py-3 transition-colors hover:text-[var(--coral-accessible)]"
              onClick={() => setIsMenuOpen(false)}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              {link.label}
              <span aria-hidden="true">+</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
