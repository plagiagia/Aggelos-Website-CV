export type Language = 'en' | 'de' | 'el';

export const defaultLanguage: Language = 'en';

export const languages: Language[] = ['en', 'de', 'el'];

export const languageNames: Record<Language, string> = {
  en: 'EN',
  de: 'DE',
  el: 'EL'
};

export interface Translations {
  [key: string]: {
    en: string;
    de: string;
    el: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.works': {
    en: 'Works',
    de: 'Werke',
    el: 'Έργα'
  },
  'nav.about': {
    en: 'About',
    de: 'Über',
    el: 'Σχετικά'
  },
  'nav.contact': {
    en: 'Contact',
    de: 'Kontakt',
    el: 'Επικοινωνία'
  },

  // Home
  'home.subtitle': {
    en: 'Contemporary Visual Artist | Painting',
    de: 'Zeitgenössischer Bildender Künstler | Malerei',
    el: 'Σύγχρονος Εικαστικός Καλλιτέχνης | Ζωγραφική'
  },
  'home.tagline': {
    en: 'Specialized in contemporary painting practice with comprehensive foundation in drawing, color theory, composition, and emerging media.',
    de: 'Spezialisiert auf zeitgenössische Malerei mit umfassender Grundlage in Zeichnung, Farbtheorie, Komposition und neuen Medien.',
    el: 'Εξειδίκευση στη σύγχρονη ζωγραφική με ολοκληρωμένη βάση στο σχέδιο, τη θεωρία χρωμάτων, τη σύνθεση και τα νέα μέσα.'
  },
  'home.selectedWorks': {
    en: 'Selected Works',
    de: 'Ausgewählte Werke',
    el: 'Επιλεγμένα Έργα'
  },
  'home.viewAll': {
    en: 'View all works',
    de: 'Alle Werke ansehen',
    el: 'Προβολή όλων των έργων'
  },
  'home.statement': {
    en: 'Accomplished visual artist with distinction-level Integrated Master\'s degree in Painting from Aristotle University of Thessaloniki. Committed to continuous artistic development and professional excellence within the visual arts sector.',
    de: 'Ausgezeichneter bildender Künstler mit einem integrierten Masterstudium in Malerei mit Auszeichnung von der Aristoteles-Universität Thessaloniki. Engagiert für kontinuierliche künstlerische Entwicklung und professionelle Exzellenz im Bereich der bildenden Kunst.',
    el: 'Καταξιωμένος εικαστικός καλλιτέχνης με Ενιαίο Μεταπτυχιακό Τίτλο (Integrated Master) στη Ζωγραφική από το Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης με βαθμό "Άριστα". Δεσμευμένος στη συνεχή καλλιτεχνική εξέλιξη και την επαγγελματική αριστεία στον τομέα των εικαστικών τεχνών.'
  },
  'home.readMore': {
    en: 'Read more',
    de: 'Weiterlesen',
    el: 'Διαβάστε περισσότερα'
  },

  // Works
  'works.title': {
    en: 'Works',
    de: 'Werke',
    el: 'Έργα'
  },
  'works.viewDetails': {
    en: 'View details',
    de: 'Details ansehen',
    el: 'Λεπτομέρειες'
  },
  'works.backToWorks': {
    en: 'Back to works',
    de: 'Zurück zu den Werken',
    el: 'Επιστροφή στα έργα'
  },
  'works.inquire': {
    en: 'Inquire about this work',
    de: 'Werk anfragen',
    el: 'Ενδιαφέρομαι για αυτό το έργο'
  },

  // Metadata labels
  'meta.year': {
    en: 'Year',
    de: 'Jahr',
    el: 'Έτος'
  },
  'meta.medium': {
    en: 'Medium',
    de: 'Medium',
    el: 'Μέσο'
  },
  'meta.dimensions': {
    en: 'Dimensions',
    de: 'Maße',
    el: 'Διαστάσεις'
  },
  'meta.series': {
    en: 'Series',
    de: 'Serie',
    el: 'Σειρά'
  },
  'meta.exhibition': {
    en: 'Exhibition',
    de: 'Ausstellung',
    el: 'Έκθεση'
  },
  'meta.availability': {
    en: 'Availability',
    de: 'Verfügbarkeit',
    el: 'Διαθεσιμότητα'
  },
  'meta.status': {
    en: 'Status',
    de: 'Status',
    el: 'Κατάσταση'
  },
  'meta.notes': {
    en: 'Notes',
    de: 'Notizen',
    el: 'Σημειώσεις'
  },
  'meta.usage': {
    en: 'Usage',
    de: 'Verwendung',
    el: 'Χρήση'
  },

  // About
  'about.title': {
    en: 'About',
    de: 'Über mich',
    el: 'Βιογραφικό'
  },
  'about.bio': {
    en: 'Accomplished visual artist with distinction-level Integrated Master\'s degree (300 ECTS) in Painting from Aristotle University of Thessaloniki. Graduated with honors (9.37/10), achieving exceptional thesis recognition (9.85/10). Specialized in contemporary painting practice with comprehensive foundation in drawing, color theory, composition, and emerging media. Equipped with pedagogical training and practical teaching experience. Committed to continuous artistic development and professional excellence within the visual arts sector.',
    de: 'Ausgezeichneter bildender Künstler mit integriertem Masterstudium (300 ECTS) in Malerei mit Auszeichnung von der Aristoteles-Universität Thessaloniki. Abschluss mit Auszeichnung (9,37/10), mit außergewöhnlicher Anerkennung der Abschlussarbeit (9,85/10). Spezialisiert auf zeitgenössische Malerei mit umfassender Grundlage in Zeichnung, Farbtheorie, Komposition und neuen Medien. Ausgestattet mit pädagogischer Ausbildung und praktischer Lehrerfahrung. Engagiert für kontinuierliche künstlerische Entwicklung und professionelle Exzellenz im Bereich der bildenden Kunst.',
    el: 'Καταξιωμένος εικαστικός καλλιτέχνης με Ενιαίο Μεταπτυχιακό Τίτλο (Integrated Master, 300 ECTS) στη Ζωγραφική από το Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης. Αποφοίτησε με βαθμό "Άριστα" (9.37/10), σημειώνοντας εξαιρετική επίδοση στη διπλωματική εργασία (9.85/10). Εξειδικεύεται στη σύγχρονη ζωγραφική με πλήρη κατάρτιση στο σχέδιο, τη θεωρία χρωμάτων, τη σύνθεση και τα νέα μέσα. Διαθέτει παιδαγωγική κατάρτιση και διδακτική εμπειρία. Δεσμευμένος για συνεχή καλλιτεχνική εξέλιξη και επαγγελματική αριστεία στον τομέα των εικαστικών τεχνών.'
  },
  'about.statementTitle': {
    en: 'Artist Statement',
    de: 'Künstlerstatement',
    el: 'Καλλιτεχνική Προσέγγιση'
  },
  'about.cvTitle': {
    en: 'Curriculum Vitae',
    de: 'Lebenslauf',
    el: 'Βιογραφικό Σημείωμα'
  },
  'about.education': {
    en: 'Education',
    de: 'Ausbildung',
    el: 'Εκπαίδευση'
  },
  'about.exhibitions': {
    en: 'Selected Exhibitions',
    de: 'Ausgewählte Ausstellungen',
    el: 'Επιλεγμένες Εκθέσεις'
  },
  'about.experience': {
    en: 'Experience',
    de: 'Erfahrung',
    el: 'Εμπειρία'
  },
  'about.skills': {
    en: 'Skills & Tools',
    de: 'Fähigkeiten & Tools',
    el: 'Δεξιότητες & Εργαλεία'
  },
  'about.languages': {
    en: 'Languages & Qualifications',
    de: 'Sprachen & Qualifikationen',
    el: 'Γλώσσες & Προσόντα'
  },
  'about.academicProjects': {
    en: 'Academic Projects & Research',
    de: 'Akademische Projekte & Forschung',
    el: 'Ακαδημαϊκά Έργα & Έρευνα'
  },
  'about.competencies': {
    en: 'Core Competencies',
    de: 'Kernkomπετέντζες',
    el: 'Βασικές Δεξιότητες'
  },

  // Contact
  'contact.title': {
    en: 'Contact',
    de: 'Kontakt',
    el: 'Επικοινωνία'
  },
  'contact.subtitle': {
    en: 'Available for studio and gallery assistant roles, commissions, and collaborative projects.',
    de: 'Offen für Stellen als Studio- oder Galerieassistent, Auftragsarbeiten und künstlerische Kooperationen.',
    el: 'Διαθέσιμος για ρόλους βοηθού εργαστηρίου και γκαλερί, αναθέσεις έργων και συνεργασίες.'
  },
  'contact.email': {
    en: 'Email',
    de: 'E-Mail',
    el: 'Email'
  },
  'contact.phone': {
    en: 'Phone',
    de: 'Telefon',
    el: 'Τηλέφωνο'
  },
  'contact.location': {
    en: 'Location',
    de: 'Standort',
    el: 'Τοποθεσία'
  },
  'contact.social': {
    en: 'Social',
    de: 'Social Media',
    el: 'Κοινωνικά Δίκτυα'
  },

  // Footer
  'footer.tagline': {
    en: 'Contemporary Visual Artist | Painting — Thessaloniki, Greece',
    de: 'Zeitgenössischer Bildender Künstler | Malerei — Thessaloniki, Griechenland',
    el: 'Σύγχρονος Εικαστικός Καλλιτέχνης | Ζωγραφική — Θεσσαλονίκη, Ελλάδα'
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

export function getLocalizedValue<T extends { en: string; de: string; el?: string }>(
  value: T,
  lang: Language
): string {
  return (value as any)[lang] || value.en;
}
