export type Language = 'en' | 'de';

export const defaultLanguage: Language = 'en';

export const languages: Language[] = ['en', 'de'];

export const languageNames: Record<Language, string> = {
  en: 'EN',
  de: 'DE'
};

export interface Translations {
  [key: string]: {
    en: string;
    de: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.works': {
    en: 'Works',
    de: 'Werke'
  },
  'nav.about': {
    en: 'About',
    de: 'Über'
  },
  'nav.contact': {
    en: 'Contact',
    de: 'Kontakt'
  },

  // Home
  'home.subtitle': {
    en: 'Contemporary Visual Artist | Painting',
    de: 'Zeitgenössischer Bildender Künstler | Malerei'
  },
  'home.tagline': {
    en: 'Specialized in contemporary painting practice with comprehensive foundation in drawing, color theory, composition, and emerging media.',
    de: 'Spezialisiert auf zeitgenössische Malerei mit umfassender Grundlage in Zeichnung, Farbtheorie, Komposition und neuen Medien.'
  },
  'home.selectedWorks': {
    en: 'Selected Works',
    de: 'Ausgewählte Werke'
  },
  'home.viewAll': {
    en: 'View all works',
    de: 'Alle Werke ansehen'
  },
  'home.statement': {
    en: 'Accomplished visual artist with distinction-level Integrated Master\'s degree in Painting from Aristotle University of Thessaloniki. Committed to continuous artistic development and professional excellence within the visual arts sector.',
    de: 'Ausgezeichneter bildender Künstler mit einem integrierten Masterstudium in Malerei mit Auszeichnung von der Aristoteles-Universität Thessaloniki. Engagiert für kontinuierliche künstlerische Entwicklung und professionelle Exzellenz im Bereich der bildenden Kunst.'
  },
  'home.readMore': {
    en: 'Read more',
    de: 'Weiterlesen'
  },

  // Works
  'works.title': {
    en: 'Works',
    de: 'Werke'
  },
  'works.viewDetails': {
    en: 'View details',
    de: 'Details ansehen'
  },
  'works.backToWorks': {
    en: 'Back to works',
    de: 'Zurück zu den Werken'
  },
  'works.inquire': {
    en: 'Inquire about this work',
    de: 'Werk anfragen'
  },

  // Metadata labels
  'meta.year': {
    en: 'Year',
    de: 'Jahr'
  },
  'meta.medium': {
    en: 'Medium',
    de: 'Medium'
  },
  'meta.dimensions': {
    en: 'Dimensions',
    de: 'Maße'
  },
  'meta.series': {
    en: 'Series',
    de: 'Serie'
  },
  'meta.exhibition': {
    en: 'Exhibition',
    de: 'Ausstellung'
  },
  'meta.availability': {
    en: 'Availability',
    de: 'Verfügbarkeit'
  },
  'meta.status': {
    en: 'Status',
    de: 'Status'
  },
  'meta.notes': {
    en: 'Notes',
    de: 'Notizen'
  },
  'meta.usage': {
    en: 'Usage',
    de: 'Verwendung'
  },

  // About
  'about.title': {
    en: 'About',
    de: 'Über mich'
  },
  'about.bio': {
    en: 'Accomplished visual artist with distinction-level Integrated Master\'s degree (300 ECTS) in Painting from Aristotle University of Thessaloniki. Graduated with honors (9.37/10), achieving exceptional thesis recognition (9.85/10). Specialized in contemporary painting practice with comprehensive foundation in drawing, color theory, composition, and emerging media. Equipped with pedagogical training and practical teaching experience. Committed to continuous artistic development and professional excellence within the visual arts sector.',
    de: 'Ausgezeichneter bildender Künstler mit integriertem Masterstudium (300 ECTS) in Malerei mit Auszeichnung von der Aristoteles-Universität Thessaloniki. Abschluss mit Auszeichnung (9,37/10), mit außergewöhnlicher Anerkennung der Abschlussarbeit (9,85/10). Spezialisiert auf zeitgenössische Malerei mit umfassender Grundlage in Zeichnung, Farbtheorie, Komposition und neuen Medien. Ausgestattet mit pädagogischer Ausbildung und praktischer Lehrerfahrung. Engagiert für kontinuierliche künstlerische Entwicklung und professionelle Exzellenz im Bereich der bildenden Kunst.'
  },
  'about.statementTitle': {
    en: 'Artist Statement',
    de: 'Künstlerstatement'
  },
  'about.cvTitle': {
    en: 'Curriculum Vitae',
    de: 'Lebenslauf'
  },
  'about.education': {
    en: 'Education',
    de: 'Ausbildung'
  },
  'about.exhibitions': {
    en: 'Selected Exhibitions',
    de: 'Ausgewählte Ausstellungen'
  },
  'about.experience': {
    en: 'Experience',
    de: 'Erfahrung'
  },
  'about.skills': {
    en: 'Skills & Tools',
    de: 'Fähigkeiten & Tools'
  },
  'about.languages': {
    en: 'Languages & Qualifications',
    de: 'Sprachen & Qualifikationen'
  },
  'about.academicProjects': {
    en: 'Academic Projects & Research',
    de: 'Akademische Projekte & Forschung'
  },
  'about.competencies': {
    en: 'Core Competencies',
    de: 'Kernkompetenzen'
  },

  // Contact
  'contact.title': {
    en: 'Contact',
    de: 'Kontakt'
  },
  'contact.subtitle': {
    en: 'Available for studio and gallery assistant roles, commissions, and collaborative projects.',
    de: 'Offen für Stellen als Studio- oder Galerieassistent, Auftragsarbeiten und künstlerische Kooperationen.'
  },
  'contact.email': {
    en: 'Email',
    de: 'E-Mail'
  },
  'contact.phone': {
    en: 'Phone',
    de: 'Telefon'
  },
  'contact.location': {
    en: 'Location',
    de: 'Standort'
  },
  'contact.social': {
    en: 'Social',
    de: 'Social Media'
  },

  // Footer
  'footer.tagline': {
    en: 'Contemporary Visual Artist | Painting — Thessaloniki, Greece',
    de: 'Zeitgenössischer Bildender Künstler | Malerei — Thessaloniki, Griechenland'
  }
};

export function t(key: string, lang: Language): string {
  const translation = translations[key];
  if (!translation) {
    console.warn(`Missing translation for key: ${key}`);
    return key;
  }
  return translation[lang] || translation.en;
}

export function getLocalizedValue<T extends { en: string; de: string }>(
  value: T,
  lang: Language
): string {
  return value[lang] || value.en;
}
