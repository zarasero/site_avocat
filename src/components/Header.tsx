"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { site } from "@/lib/site";

export function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "#presentation", label: t.nav.presentation },
    { href: "#avocat", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-navy-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="group min-w-0">
          <p className="truncate font-serif text-lg tracking-tight text-navy-900 transition group-hover:text-gold-600 md:text-xl">
            {site.name}
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-navy-500">
            {t.hero.subtitle}
          </p>
        </Link>

        <div className="flex items-center gap-3 md:gap-6">
          <LanguageSwitcher className="hidden sm:flex" />
          <nav className="hidden gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide text-navy-600 transition hover:text-navy-900"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="inline-flex flex-col gap-1.5 p-2 md:hidden"
            aria-label={open ? "Fermer" : "Menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className={`block h-0.5 w-6 bg-navy-900 transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-navy-900 transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-navy-900 transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-navy-100 bg-white px-6 py-6 md:hidden">
          <LanguageSwitcher className="mb-6 justify-center" />
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-lg font-medium text-navy-800"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
