export type Locale = "fr" | "en" | "ru";

export const locales: { code: Locale; label: string }[] = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
];

const t = {
  fr: {
    nav: {
      presentation: "Présentation",
      about: "L'avocat",
      contact: "Contact",
    },
    hero: {
      subtitle: "Avocat — Nice",
    },
    introduction: `Maître Arnaud GOSSA accompagne ses clients en droit administratif (urbanisme, responsabilité de la puissance publique, recours contre les décisions préfectorales, fonction publique, etc.), en droit civil (réparation du préjudice corporel, responsabilité civile, droit de la famille, droit immobilier, procédure d'adoption, etc.), ainsi qu'en droit pénal.`,
    legalAid: `Le Cabinet intervient également au titre de l'aide juridictionnelle, conformément aux conditions légales d'éligibilité.`,
    languagesNote: [
      { text: "Maître Arnaud GOSSA exerce en " },
      { text: "français et en anglais", highlight: true },
      { text: ". Un interprète est mis à disposition pour les clients " },
      { text: "russophones", highlight: true },
      { text: "." },
    ],
    about: {
      title: "L'avocat",
      p1: "Diplômé de l'Université Côte d'Azur, Maître Arnaud GOSSA a prêté serment le 7 janvier 2015 et est inscrit au Barreau de Nice.",
      p2: "Il accompagne particuliers et entreprises dans la défense de leurs intérêts devant les juridictions civiles, administratives et pénales.",
    },
    contact: {
      title: "Contact",
      phone: "Tél",
      email: "Email",
      mapTitle: "Plan d'accès",
      saveContact: "Enregistrer le contact",
      call: "Appeler",
      sendEmail: "Envoyer un email",
    },
    footer: {
      disclaimer: "Site informatif — ne constitue pas un conseil juridique.",
    },
  },
  en: {
    nav: {
      presentation: "Practice areas",
      about: "The lawyer",
      contact: "Contact",
    },
    hero: {
      subtitle: "Lawyer — Nice, France",
    },
    introduction: `Maître Arnaud GOSSA advises and represents clients in administrative law (urban planning, public authority liability, appeals against prefectural decisions, civil service matters, etc.), civil law (personal injury, civil liability, family law, real estate law, adoption proceedings, etc.), and criminal law.`,
    legalAid: `The firm also accepts cases under legal aid (aide juridictionnelle), subject to the eligibility requirements set by French law.`,
    languagesNote: [
      { text: "Maître Arnaud GOSSA practises in " },
      { text: "French and English", highlight: true },
      { text: ". An interpreter is available for " },
      { text: "Russian-speaking", highlight: true },
      { text: " clients." },
    ],
    about: {
      title: "The lawyer",
      p1: "A graduate of Université Côte d'Azur, Maître Arnaud GOSSA was sworn in on 7 January 2015 and is registered with the Barreau de Nice.",
      p2: "He assists individuals and businesses in defending their interests before civil, administrative and criminal courts.",
    },
    contact: {
      title: "Contact",
      phone: "Phone",
      email: "Email",
      mapTitle: "Map",
      saveContact: "Save contact",
      call: "Call",
      sendEmail: "Send an email",
    },
    footer: {
      disclaimer: "Informational website — not legal advice.",
    },
  },
  ru: {
    nav: {
      presentation: "Специализация",
      about: "Об адвокате",
      contact: "Контакты",
    },
    hero: {
      subtitle: "Адвокат — Ницца, Франция",
    },
    introduction: `Маître Arnaud GOSSA сопровождает клиентов в области административного права (градостроительство, ответственность публичной власти, обжалование решений префектуры, государственная служба и т.д.), гражданского права (возмещение вреда здоровью, гражданская ответственность, семейное право, недвижимость, усыновление и т.д.), а также уголовного права.`,
    legalAid: `Кабинет также ведёт дела в рамках государственной юридической помощи (aide juridictionnelle) при соблюдении условий, установленных французским законодательством.`,
    languagesNote: [
      { text: "Maître Arnaud GOSSA ведёт приёмы на " },
      { text: "французском и английском", highlight: true },
      { text: " языках. Для " },
      { text: "русскоязычных", highlight: true },
      { text: " клиентов предоставляется переводчик." },
    ],
    about: {
      title: "Об адвокате",
      p1: "Выпускник Université Côte d'Azur, Maître Arnaud GOSSA принёс присягу 7 января 2015 года и состоит в коллегии адвокатов Ниццы (Barreau de Nice).",
      p2: "Он сопровождает частных лиц и компании в защите их интересов в гражданских, административных и уголовных судах.",
    },
    contact: {
      title: "Контакты",
      phone: "Тел.",
      email: "Email",
      mapTitle: "Карта",
      saveContact: "Сохранить контакт",
      call: "Позвонить",
      sendEmail: "Написать на email",
    },
    footer: {
      disclaimer: "Информационный сайт — не является юридической консультацией.",
    },
  },
} as const;

export function getTranslations(locale: Locale) {
  return t[locale];
}
