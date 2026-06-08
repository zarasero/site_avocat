"use client";

import { useLanguage } from "@/context/LanguageContext";
import { site } from "@/lib/site";

function buildVCard(): string {
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${site.name}`,
    "N:GOSSA;Arnaud;;;",
    "ORG:Maître",
    "TITLE:Avocat",
    `TEL;TYPE=CELL:${site.phone}`,
    `EMAIL:${site.email}`,
    `ADR:;;${site.addressLine1};${site.city};;06000;France`,
    "END:VCARD",
  ].join("\r\n");
}

function PhoneIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.956 1.293c-.076.103-.184.164-.307.164-.123 0-.23-.061-.307-.164l-1.06-1.435M6.75 3h.008v.008H6.75V3zm0 0v.375M6.75 3h7.5" />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789l3.168-2.789 3.168 2.789z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 00-1.07-1.916l-7.5-4.615a2.25 2.25 0 00-2.36 0L3.32 4.91a2.25 2.25 0 00-1.07 1.916V6.75" />
    </svg>
  );
}

export function ContactActions() {
  const { t } = useLanguage();

  function saveContact() {
    const blob = new Blob([buildVCard()], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "arnaud-gossa.vcf";
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <a href={`tel:${site.phone}`} className="btn-action-call">
        <PhoneIcon />
        <span>{t.contact.call}</span>
      </a>
      <button type="button" onClick={saveContact} className="btn-action-save">
        <ContactIcon />
        <span>{t.contact.saveContact}</span>
      </button>
      <a href={`mailto:${site.email}`} className="btn-action-email">
        <EmailIcon />
        <span>{t.contact.sendEmail}</span>
      </a>
    </div>
  );
}

function LocationIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

type ContactDetailsProps = {
  phoneLabel: string;
  emailLabel: string;
};

export function ContactDetails({ phoneLabel, emailLabel }: ContactDetailsProps) {
  return (
    <div className="space-y-3">
      <div className="contact-detail">
        <div className="contact-icon-wrap">
          <LocationIcon />
        </div>
        <div>
          <p className="font-medium text-white">{site.addressLine1}</p>
          <p className="text-navy-300">{site.addressLine2}</p>
        </div>
      </div>
      <div className="contact-detail">
        <div className="contact-icon-wrap">
          <PhoneIcon />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-gold-400">
            {phoneLabel}
          </p>
          <p className="text-lg font-medium text-white">{site.phoneDisplay}</p>
        </div>
      </div>
      <div className="contact-detail">
        <div className="contact-icon-wrap">
          <EmailIcon />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-gold-400">
            {emailLabel}
          </p>
          <p className="break-all text-base font-medium text-white sm:text-lg">
            {site.email}
          </p>
        </div>
      </div>
    </div>
  );
}
