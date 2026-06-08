"use client";

import { useLanguage } from "@/context/LanguageContext";
import { site } from "@/lib/site";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-800 bg-navy-950 py-10 text-navy-300">
      <div className="mx-auto max-w-3xl px-6 text-center text-sm">
        <p className="font-serif text-base text-white">{site.name}</p>
        <p className="mt-4">© {year}</p>
        <p className="mt-2 text-navy-400">{t.footer.disclaimer}</p>
      </div>
    </footer>
  );
}
