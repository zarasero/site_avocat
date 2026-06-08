"use client";

import { useLanguage } from "@/context/LanguageContext";

export function LanguagesNote() {
  const { t } = useLanguage();

  return (
    <p className="mt-10 text-lg leading-relaxed text-navy-600">
      {t.languagesNote.map((part, i) =>
        "highlight" in part && part.highlight ? (
          <span
            key={i}
            className="text-navy-900 underline decoration-gold-500 decoration-2 underline-offset-4"
          >
            {part.text}
          </span>
        ) : (
          <span key={i}>{part.text}</span>
        ),
      )}
    </p>
  );
}
