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
    en: 'Visual Artist',
    de: 'Bildender Künstler'
  },
  'home.tagline': {
    en: 'Exploring memory, migration, and urban narratives through painting, illustration, and mixed media.',
    de: 'Erforschung von Erinnerung, Migration und urbanen Narrativen durch Malerei, Illustration und Mixed Media.'
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
    en: 'My work is driven by an urge to tell stories through images. Growing up in Thessaloniki\'s rich historical environment, I developed a fascination with how memory and place intertwine.',
    de: 'Mein Schaffen wird von dem Wunsch angetrieben, Geschichten durch Bilder zu erzählen. Aufgewachsen in der geschichtsträchtigen Umgebung Thessalonikis entwickelte ich eine Faszination dafür, wie Erinnerung und Orte miteinander verwoben sind.'
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
    en: 'Aggelos Giannoulis (b. 2000, Thessaloniki) is a visual artist specializing in painting and illustration. A recent BFA graduate of the School of Fine Arts, Thessaloniki, he has relocated to Berlin to immerse himself in its vibrant art scene.',
    de: 'Aggelos Giannoulis (geb. 2000, Thessaloniki) ist ein bildender Künstler mit Schwerpunkt Malerei und Illustration. Vor Kurzem hat er sein Kunststudium an der School of Fine Arts in Thessaloniki abgeschlossen und ist nach Berlin übergesiedelt.'
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
    en: 'Languages',
    de: 'Sprachen'
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
    en: 'Visual artist exploring memory, migration, and urban narratives in Berlin.',
    de: 'Bildender Künstler, der in Berlin Erinnerungen, Migration und urbane Narrative erforscht.'
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
