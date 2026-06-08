"use client";

import { locales, type Locale } from "@/lib/translations";
import { useLanguage } from "@/context/LanguageContext";

const localeTitles: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  ru: "Русский",
};

type LanguageSwitcherProps = {
  className?: string;
  variant?: "light" | "dark";
};

export function LanguageSwitcher({
  className = "",
  variant = "light",
}: LanguageSwitcherProps) {
  const { locale, setLocale } = useLanguage();
  const isDark = variant === "dark";

  return (
    <div
      className={`flex items-center gap-1.5 ${className}`}
      role="group"
      aria-label="Langue / Language"
    >
      {locales.map(({ code, label }) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            title={localeTitles[code]}
            aria-pressed={active}
            className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold tracking-wide transition ${
              active
                ? isDark
                  ? "bg-gold-500 text-navy-950 ring-2 ring-gold-400/50 ring-offset-2 ring-offset-navy-950"
                  : "bg-navy-900 text-white ring-2 ring-gold-500/40 ring-offset-2 ring-offset-white"
                : isDark
                  ? "border border-navy-600 bg-navy-800/80 text-navy-200 hover:border-gold-500/50 hover:text-white"
                  : "border border-navy-200 bg-white text-navy-600 hover:border-navy-400 hover:text-navy-900"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
