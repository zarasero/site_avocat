"use client";

import { ContactActions, ContactDetails } from "@/components/ContactActions";
import { LanguagesNote } from "@/components/LanguagesNote";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";
import { site } from "@/lib/site";

export function HomeContent() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative overflow-hidden border-b border-navy-800 bg-navy-950 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-navy-800/50 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-400">
            {t.hero.subtitle}
          </p>
          <h1 className="mt-5 font-serif text-4xl tracking-tight md:text-5xl">
            {site.name}
          </h1>
          <div className="mx-auto mt-5 h-px w-24 bg-gold-500/60" />
          <div className="mt-10 flex justify-center">
            <LanguageSwitcher variant="dark" />
          </div>
        </div>
      </section>

      <section id="presentation" className="scroll-mt-20 bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="section-title">{t.nav.presentation}</h2>
          <div className="section-accent" />
          <p className="mt-8 text-lg leading-relaxed text-navy-700">
            {t.introduction}
          </p>

          <aside className="legal-aid-box">
            <p className="text-lg font-medium leading-relaxed text-navy-100">
              {t.legalAid}
            </p>
          </aside>

          <LanguagesNote />
        </div>
      </section>

      <section
        id="avocat"
        className="scroll-mt-20 border-y border-navy-100 bg-cream py-20"
      >
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="section-title">{t.about.title}</h2>
          <div className="section-accent" />
          <p className="mt-8 text-lg leading-relaxed text-navy-700">
            {t.about.p1}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-navy-700">
            {t.about.p2}
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-20 bg-navy-50 py-20"
      >
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="section-title">{t.contact.title}</h2>
          <div className="section-accent" />

          <div className="contact-panel mt-10">
            <div className="space-y-6 p-6 md:p-8">
              <ContactDetails
                phoneLabel={t.contact.phone}
                emailLabel={t.contact.email}
              />
              <ContactActions />
            </div>

            <div className="border-t border-navy-700">
              <iframe
                title={t.contact.mapTitle}
                src={site.mapsEmbedUrl}
                className="h-64 w-full opacity-95"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
