export interface WorkImage {
  src: string;
  alt: {
    en: string;
    de: string;
    el: string;
  };
  caption?: {
    en: string;
    de: string;
    el: string;
  };
}

export interface WorkMetadata {
  key: string;
  value: {
    en: string;
    de: string;
    el: string;
  };
}

export interface Work {
  id: string;
  slug: string;
  title: {
    en: string;
    de: string;
    el: string;
  };
  year: string;
  medium: string;
  dimensions: string;
  thumbnail: string;
  images: WorkImage[];
  shortDescription: {
    en: string;
    de: string;
    el: string;
  };
  longDescription: {
    en: string;
    de: string;
    el: string;
  };
  metadata: WorkMetadata[];
}

export const works: Work[] = [
  {
    id: "urban-reverie",
    slug: "urban-reverie",
    title: {
      en: "Urban Reverie",
      de: "Urban Reverie",
      el: "Αστική Ρεμβασιά"
    },
    year: "2023",
    medium: "Oil on canvas",
    dimensions: "50 × 70 cm",
    thumbnail: "/images/works/painting-1.png",
    images: [
      {
        src: "/images/works/painting-1.png",
        alt: {
          en: "Contemporary abstract painting with deep textures and muted earth tones by Aggelos Giannoulis.",
          de: "Zeitgenössisches abstraktes Gemälde mit tiefen Texturen und gedämpften Erdtönen von Aggelos Giannoulis.",
          el: "Σύγχρονη αφηρημένη ζωγραφική με βαθιές υφές και απαλούς γήινους τόνους από τον Άγγελο Γιαννούλη."
        }
      }
    ],
    shortDescription: {
      en: "A semi-abstract cityscape inspired by midnight walks in Thessaloniki, layering bold paint strokes with collaged architectural drawings.",
      de: "Eine semi-abstrakte Stadtlandschaft, inspiriert von nächtlichen Spaziergängen in Thessaloniki, mit kräftigen Pinselstrichen und collagierten Architekturzeichnungen.",
      el: "Ένα ημι-αφηρημένο αστικό τοπίο εμπνευσμένο από μεταμεσονύκτιους περιπάτους στη Θεσσαλονίκη, συνδυάζοντας έντονες πινελιές με κολλάζ αρχιτεκτονικών σχεδίων."
    },
    longDescription: {
      en: "Urban Reverie is part of a series exploring city nights and personal memory. The piece began as a quick sketch by the harbor and evolved into a moody blue-green canvas that folds fragments of Greek newspapers into the paint, tracing how stories shape a city's identity.",
      de: "Urban Reverie ist Teil einer Serie, die Stadtnächte und persönliche Erinnerung erforscht. Das Werk begann als schnelle Skizze am Hafen und entwickelte sich zu einer stimmungsvollen Blau-Grün-Komposition, in der Fragmente griechischer Zeitungen die Identität der Stadt nachzeichnen.",
      el: "Το έργο 'Αστική Ρεμβασιά' αποτελεί μέρος μιας σειράς που εξερευνά τις νύχτες της πόλης και την προσωπική μνήμη. Το έργο ξεκίνησε ως ένα γρήγορο σχέδιο στο λιμάνι και εξελίχθηκε σε έναν μελαγχολικό μπλε-πράσινο καμβά που ενσωματώνει αποκόμματα ελληνικών εφημερίδων στο χρώμα, ιχνηλατώντας πώς οι ιστορίες διαμορφώνουν την ταυτότητα της πόλης."
    },
    metadata: [
      {
        key: "series",
        value: { en: "Night Transitions", de: "Night Transitions", el: "Νυχτερινές Μεταβάσεις" }
      },
      {
        key: "exhibition",
        value: { en: "AUTH Graduate Show 2023", de: "AUTH Graduate Show 2023", el: "Πτυχιακή Έκθεση ΑΠΘ 2023" }
      },
      {
        key: "availability",
        value: { en: "Available on request", de: "Auf Anfrage verfügbar", el: "Διαθέσιμο κατόπιν παραγγελίας" }
      }
    ]
  },
  {
    id: "transit-echoes",
    slug: "transit-echoes",
    title: {
      en: "Transit Echoes",
      de: "Transit Echoes",
      el: "Ηχώ της Μετακίνησης"
    },
    year: "2024",
    medium: "Mixed media on wood panel",
    dimensions: "60 × 90 cm",
    thumbnail: "/images/works/painting-2.png",
    images: [
      {
        src: "/images/works/painting-2.png",
        alt: {
          en: "Minimalist contemporary painting with ethereal blue washes and charcoal line work by Aggelos Giannoulis.",
          de: "Minimalistisches zeitgenössisches Gemälde mit ätherischen blauen Lasuren und Kohlezeichnungen von Aggelos Giannoulis.",
          el: "Μινιμαλιστική σύγχρονη ζωγραφική με αιθέριες μπλε στρώσεις και σχέδιο με κάρβουνο από τον Άγγελο Γιαννούλη."
        }
      }
    ],
    shortDescription: {
      en: "Layered silhouettes and transit signage mirror the disorientation of arriving in a new city and learning its rhythm.",
      de: "Geschichtete Silhouetten und Verkehrsschilder spiegeln die Desorientierung wider, in einer neuen Stadt anzukommen und ihren Rhythmus zu erlernen.",
      el: "Επικαλυπτόμενες σιλουέτες και σήμανση συγκοινωνιών αντικατοπτρίζουν τον αποπροσανατολισμό της άφιξης σε μια νέα πόλη και την εκμάθηση του ρυθμού της."
    },
    longDescription: {
      en: "Transit Echoes combines oil washes, xerox transfers, and spray paint to capture the sensory overload of U-Bahn commutes. Glowing orange underlayers reference station lighting, while graphite line work maps the gestures of strangers passing by.",
      de: "Transit Echoes verbindet Öllasuren, Xerox-Transfers und Sprühlack, um die Sinnesüberflutung von U-Bahn-Fahrten einzufangen. Leuchtende Orangetöne verweisen auf das Stationslicht, während Graphitlinien die Bewegungen vorbeieilender Fremder kartieren.",
      el: "Το έργο 'Ηχώ της Μετακίνησης' συνδυάζει στρώσεις λαδιού, μεταφορές xerox και σπρέι για να αποτυπώσει την αισθητηριακή υπερφόρτωση των μετακινήσεων με το μετρό. Οι πορτοκαλί υποστρώσεις αναφέρονται στον φωτισμό των σταθμών, ενώ το σχέδιο με γραφίτη χαρτογραφεί τις χειρονομίες των ξένων που περνούν."
    },
    metadata: [
      {
        key: "series",
        value: { en: "Berlin Diaries", de: "Berlin Diaries", el: "Ημερολόγια Βερολίνου" }
      },
      {
        key: "status",
        value: { en: "Currently exhibited at Studio 45, Berlin", de: "Aktuell ausgestellt im Studio 45, Berlin", el: "Εκτίθεται αυτή τη στιγμή στο Studio 45, Βερολίνο" }
      }
    ]
  },
  {
    id: "archive-of-blue",
    slug: "archive-of-blue",
    title: {
      en: "Archive of Blue",
      de: "Archive of Blue",
      el: "Αρχείο του Μπλε"
    },
    year: "2022",
    medium: "Acrylic and collage on paper",
    dimensions: "42 × 59 cm",
    thumbnail: "/images/works/painting-3.png",
    images: [
      {
        src: "/images/works/painting-3.png",
        alt: {
          en: "Bold monochromatic oil painting with thick impasto textures by Aggelos Giannoulis.",
          de: "Mutiges monochromatisches Ölgemälde mit dicken Impasto-Texturen von Aggelos Giannoulis.",
          el: "Έντονη μονοχρωματική ελαιογραφία με παχιές υφές impasto από τον Άγγελο Γιαννούλη."
        }
      }
    ],
    shortDescription: {
      en: "A layered memory collage combining family archive photos with gestural mark-making in saturated blue inks.",
      de: "Eine geschichtete Erinnerungscollage, die Familienarchivfotos mit gestischen Markierungen in satten Blautinten verbindet.",
      el: "Ένα κολάζ μνήμης σε στρώσεις που συνδυάζει οικογενειακές φωτογραφίες αρχείου με χειρονομιακά ίχνη σε κορεσμένα μπλε μελάνια."
    },
    longDescription: {
      en: "Archive of Blue bridges Thessaloniki memories with present-day Berlin. The work juxtaposes scanned family negatives with expressive brushwork, dissolving boundaries between documentary evidence and painted gesture.",
      de: "Archive of Blue verbindet Erinnerungen aus Thessaloniki mit dem heutigen Berlin. Das Werk stellt gescannte Familiennegative markanten Pinselspuren gegenüber und löst Grenzen zwischen dokumentarischem Material und malerischer Geste auf.",
      el: "Το έργο 'Αρχείο του Μπλε' γεφυρώνει τις αναμνήσεις της Θεσσαλονίκης με το σημερινό Βερολίνο. Το έργο αντιπαραθέτει σκαναρισμένα οικογενειακά αρνητικά με εκφραστικές πινελιές, διαλύοντας τα όρια μεταξύ του τεκμηρίου και της ζωγραφικής χειρονομίας."
    },
    metadata: [
      {
        key: "series",
        value: { en: "Family Archive", de: "Family Archive", el: "Οικογενειακό Αρχείο" }
      },
      {
        key: "notes",
        value: { en: "Edition of 5 archival pigment prints available", de: "Edition von 5 Pigmentdrucken verfügbar", el: "Διαθέσιμη έκδοση 5 αρχειακών εκτυπώσεων pigment" }
      }
    ]
  },
  {
    id: "berlin-fragments",
    slug: "berlin-fragments",
    title: {
      en: "Berlin Fragments",
      de: "Berlin Fragments",
      el: "Θραύσματα του Βερολίνου"
    },
    year: "2024",
    medium: "Digital illustration",
    dimensions: "4000 × 3000 px",
    thumbnail: "/images/works/painting-4.png",
    images: [
      {
        src: "/images/works/painting-4.png",
        alt: {
          en: "Subtle abstract painting with warm beige tones and delicate pencil marks by Aggelos Giannoulis.",
          de: "Subtiles abstraktes Gemälde mit warmen Beigetönen und zarten Bleistiftmarkierungen von Aggelos Giannoulis.",
          el: "Διακριτική αφηρημένη ζωγραφική με ζεστούς μπεζ τόνους και λεπτά ίχνη μολυβιού από τον Άγγελο Γιαννούλη."
        }
      }
    ],
    shortDescription: {
      en: "A digital collage mapping Berlin's brutalist architecture against handwritten notes from daily sketch walks.",
      de: "Eine digitale Collage, die Berlins brutalistische Architektur mit handschriftlichen Notizen aus täglichen Skizzen-Spaziergängen verknüpft.",
      el: "Ένα ψηφιακό κολάζ που χαρτογραφεί την μπρουταλιστική αρχιτεκτονική του Βερολίνου σε συνδυασμό με χειρόγραφες σημειώσεις από καθημερινούς περιπάτους σχεδίου."
    },
    longDescription: {
      en: "Berlin Fragments is designed for both print and screen. The illustration pivots between precise vector geometry and loose tablet drawing, reflecting the push and pull between order and improvisation in Aggelos's practice.",
      de: "Berlin Fragments ist sowohl für Druck als auch Screen konzipiert. Die Illustration wechselt zwischen präziser Vektorgeometrie und lockerer Tablet-Zeichnung und spiegelt das Spannungsverhältnis von Ordnung und Improvisation in Aggelos' Praxis wider.",
      el: "Το έργο 'Θραύσματα του Βερολίνου' είναι σχεδιασμένο τόσο για εκτύπωση όσο και για οθόνη. Η εικονογράφηση εναλλάσσεται μεταξύ ακριβούς διανυσματικής γεωμετρίας και ελεύθερου σχεδίου με tablet, αντανακλώντας την αλληλεπίδραση μεταξύ τάξης και αυτοσχεδιασμού στην πρακτική του Άγγελου."
    },
    metadata: [
      {
        key: "series",
        value: { en: "City Notes", de: "City Notes", el: "Σημειώσεις Πόλης" }
      },
      {
        key: "usage",
        value: { en: "Commissioned for Urban Layers zine, 2024", de: "Auftragsarbeit für das Urban Layers Zine, 2024", el: "Ανάθεση για το περιοδικό Urban Layers, 2024" }
      }
    ]
  },
  {
    id: "mnemonic-garden",
    slug: "mnemonic-garden",
    title: {
      en: "Mnemonic Garden",
      de: "Mnemonic Garden",
      el: "Μνημονικός Κήπος"
    },
    year: "2021",
    medium: "Oil and pastel on canvas",
    dimensions: "70 × 100 cm",
    thumbnail: "/images/placeholder.svg",
    images: [
      {
        src: "/images/placeholder.svg",
        alt: {
          en: "Expressive floral oil painting with pastel highlights by Aggelos Giannoulis.",
          de: "Expressives Blumen-Ölgemälde mit Pastellakzenten von Aggelos Giannoulis.",
          el: "Εκφραστική φλοράλ ελαιογραφία με τονισμούς από παστέλ από τον Άγγελο Γιαννούλη."
        }
      }
    ],
    shortDescription: {
      en: "Floral motifs dissolve into abstract patches of light, tracing how scent and color trigger early memories.",
      de: "Florale Motive lösen sich in abstrakte Lichtfelder auf und zeigen, wie Geruch und Farbe frühe Erinnerungen auslösen.",
      el: "Φλοράλ μοτίβα διαλύονται σε αφηρημένες κηλίδες φωτός, ιχνηλατώντας πώς το άρωμα και το χρώμα πυροδοτούν πρώιμες αναμνήσεις."
    },
    longDescription: {
      en: "Mnemonic Garden was painted after interviews with family members about childhood courtyards. The palette is pulled from old film photographs, while pastel lines map the stories told during those conversations.",
      de: "Mnemonic Garden entstand nach Interviews mit Familienmitgliedern über Kindheitshöfe. Die Palette stammt aus alten Filmfotografien, während Pastelllinien die während der Gespräche erzählten Geschichten nachzeichnen.",
      el: "Ο 'Μνημονικός Κήπος' ζωγραφίστηκε μετά από συνεντεύξεις με μέλη της οικογένειας για τις αυλές των παιδικών τους χρόνων. Η παλέτα προέρχεται από παλιές φωτογραφίες φιλμ, ενώ οι γραμμές παστέλ χαρτογραφούν τις ιστορίες που ειπώθηκαν κατά τη διάρκεια αυτών των συζητήσεων."
    },
    metadata: [
      {
        key: "series",
        value: { en: "Scent Studies", de: "Scent Studies", el: "Μελέτες Αρωμάτων" }
      },
      {
        key: "availability",
        value: { en: "In private collection, Thessaloniki", de: "In privater Sammlung, Thessaloniki", el: "Σε ιδιωτική συλλογή, Θεσσαλονίκη" }
      }
    ]
  },
  {
    id: "threshold-figures",
    slug: "threshold-figures",
    title: {
      en: "Threshold Figures",
      de: "Threshold Figures",
      el: "Φιγούρες στο Κατώφλι"
    },
    year: "2023",
    medium: "Ink on layered rice paper",
    dimensions: "Triptych, 3 panels each 35 × 90 cm",
    thumbnail: "/images/placeholder.svg",
    images: [
      {
        src: "/images/placeholder.svg",
        alt: {
          en: "Ink triptych with translucent figures crossing a doorway by Aggelos Giannoulis.",
          de: "Tuschtriptychon mit transparenten Figuren, die eine Türschwelle überschreiten, von Aggelos Giannoulis.",
          el: "Τρίπτυχο με μελάνι με διαφανείς φιγούρες που διασχίζουν ένα κατώφλι από τον Άγγελο Γιαννούλη."
        }
      }
    ],
    shortDescription: {
      en: "Translucent figures printed on layered rice paper explore the sensation of hovering between two homes.",
      de: "Transparente Figuren auf geschichtetem Reispapier erforschen das Gefühl, zwischen zwei Heimaten zu schweben.",
      el: "Διαφανείς φιγούρες τυπωμένες σε επάλληλο ρυζόχαρτο εξερευνούν την αίσθηση του μετεωρισμού ανάμεσα σε δύο σπίτια."
    },
    longDescription: {
      en: "Threshold Figures was created using water-soluble ink pressed between sheets of rice paper and plexiglass. Each layer shifts slightly, casting double shadows that mimic the flicker of movement at a doorway.",
      de: "Threshold Figures entstand mit wasserlöslicher Tinte, die zwischen Reispapier und Plexiglas gepresst wurde. Jede Schicht verschiebt sich minimal und wirft doppelte Schatten, die das Flimmern einer Bewegung an der Türschwelle nachαμμήσουν.",
      el: "Το έργο 'Φιγούρες στο Κατώφλι' δημιουργήθηκε με υδατοδιαλυτό μελάνι που πιέστηκε ανάμεσα σε φύλλα ρυζόχαρτου και πλεξιγκλάς. Κάθε στρώση μετατοπίζεται ελαφρά, δημιουργώντας διπλές σκιές που μιμούνται το τρεμόπαιγμα της κίνησης σε μια πόρτα."
    },
    metadata: [
      {
        key: "series",
        value: { en: "Between Homes", de: "Between Homes", el: "Ανάμεσα σε Σπίτια" }
      },
      {
        key: "notes",
        value: { en: "Includes installation view photographs on request", de: "Installationsansichten auf Anfrage erhältlich", el: "Περιλαμβάνει φωτογραφίες άποψης εγκατάστασης κατόπιν αιτήματος" }
      }
    ]
  }
];

export function getWorkBySlug(slug: string): Work | undefined {
  return works.find(work => work.slug === slug);
}

export function getAllWorks(): Work[] {
  return works;
}
