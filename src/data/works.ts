export interface WorkImage {
  src: string;
  alt: {
    en: string;
    de: string;
  };
  caption?: {
    en: string;
    de: string;
  };
}

export interface WorkMetadata {
  key: string;
  value: {
    en: string;
    de: string;
  };
}

export interface Work {
  id: string;
  slug: string;
  title: {
    en: string;
    de: string;
  };
  year: string;
  medium: string;
  dimensions: string;
  thumbnail: string;
  images: WorkImage[];
  shortDescription: {
    en: string;
    de: string;
  };
  longDescription: {
    en: string;
    de: string;
  };
  metadata: WorkMetadata[];
}

export const works: Work[] = [
  {
    id: "urban-reverie",
    slug: "urban-reverie",
    title: {
      en: "Urban Reverie",
      de: "Urban Reverie"
    },
    year: "2023",
    medium: "Oil on canvas",
    dimensions: "50 × 70 cm",
    thumbnail: "/images/placeholder.svg",
    images: [
      {
        src: "/images/placeholder.svg",
        alt: {
          en: "Oil painting of a midnight cityscape in blue and green by Aggelos Giannoulis.",
          de: "Ölgemälde einer nächtlichen Stadtlandschaft in Blau und Grün von Aggelos Giannoulis."
        }
      }
    ],
    shortDescription: {
      en: "A semi-abstract cityscape inspired by midnight walks in Thessaloniki, layering bold paint strokes with collaged architectural drawings.",
      de: "Eine semi-abstrakte Stadtlandschaft, inspiriert von nächtlichen Spaziergängen in Thessaloniki, mit kräftigen Pinselstrichen und collagierten Architekturzeichnungen."
    },
    longDescription: {
      en: "Urban Reverie is part of a series exploring city nights and personal memory. The piece began as a quick sketch by the harbor and evolved into a moody blue-green canvas that folds fragments of Greek newspapers into the paint, tracing how stories shape a city's identity.",
      de: "Urban Reverie ist Teil einer Serie, die Stadtnächte und persönliche Erinnerung erforscht. Das Werk begann als schnelle Skizze am Hafen und entwickelte sich zu einer stimmungsvollen Blau-Grün-Komposition, in der Fragmente griechischer Zeitungen die Identität der Stadt nachzeichnen."
    },
    metadata: [
      {
        key: "series",
        value: { en: "Night Transitions", de: "Night Transitions" }
      },
      {
        key: "exhibition",
        value: { en: "AUTH Graduate Show 2023", de: "AUTH Graduate Show 2023" }
      },
      {
        key: "availability",
        value: { en: "Available on request", de: "Auf Anfrage verfügbar" }
      }
    ]
  },
  {
    id: "transit-echoes",
    slug: "transit-echoes",
    title: {
      en: "Transit Echoes",
      de: "Transit Echoes"
    },
    year: "2024",
    medium: "Mixed media on wood panel",
    dimensions: "60 × 90 cm",
    thumbnail: "/images/placeholder.svg",
    images: [
      {
        src: "/images/placeholder.svg",
        alt: {
          en: "Mixed media painting with layered silhouettes and transit signage by Aggelos Giannoulis.",
          de: "Mixed-Media-Gemälde mit geschichteten Silhouetten und Verkehrsschildern von Aggelos Giannoulis."
        }
      }
    ],
    shortDescription: {
      en: "Layered silhouettes and transit signage mirror the disorientation of arriving in a new city and learning its rhythm.",
      de: "Geschichtete Silhouetten und Verkehrsschilder spiegeln die Desorientierung wider, in einer neuen Stadt anzukommen und ihren Rhythmus zu erlernen."
    },
    longDescription: {
      en: "Transit Echoes combines oil washes, xerox transfers, and spray paint to capture the sensory overload of U-Bahn commutes. Glowing orange underlayers reference station lighting, while graphite line work maps the gestures of strangers passing by.",
      de: "Transit Echoes verbindet Öllasuren, Xerox-Transfers und Sprühlack, um die Sinnesüberflutung von U-Bahn-Fahrten einzufangen. Leuchtende Orangetöne verweisen auf das Stationslicht, während Graphitlinien die Bewegungen vorbeieilender Fremder kartieren."
    },
    metadata: [
      {
        key: "series",
        value: { en: "Berlin Diaries", de: "Berlin Diaries" }
      },
      {
        key: "status",
        value: { en: "Currently exhibited at Studio 45, Berlin", de: "Aktuell ausgestellt im Studio 45, Berlin" }
      }
    ]
  },
  {
    id: "archive-of-blue",
    slug: "archive-of-blue",
    title: {
      en: "Archive of Blue",
      de: "Archive of Blue"
    },
    year: "2022",
    medium: "Acrylic and collage on paper",
    dimensions: "42 × 59 cm",
    thumbnail: "/images/placeholder.svg",
    images: [
      {
        src: "/images/placeholder.svg",
        alt: {
          en: "Collaged illustration in blue hues with archival photographs by Aggelos Giannoulis.",
          de: "Collagierte Illustration in Blautönen mit Archivfotografien von Aggelos Giannoulis."
        }
      }
    ],
    shortDescription: {
      en: "A layered memory collage combining family archive photos with gestural mark-making in saturated blue inks.",
      de: "Eine geschichtete Erinnerungscollage, die Familienarchivfotos mit gestischen Markierungen in satten Blautinten verbindet."
    },
    longDescription: {
      en: "Archive of Blue bridges Thessaloniki memories with present-day Berlin. The work juxtaposes scanned family negatives with expressive brushwork, dissolving boundaries between documentary evidence and painted gesture.",
      de: "Archive of Blue verbindet Erinnerungen aus Thessaloniki mit dem heutigen Berlin. Das Werk stellt gescannte Familiennegative markanten Pinselspuren gegenüber und löst Grenzen zwischen dokumentarischem Material und malerischer Geste auf."
    },
    metadata: [
      {
        key: "series",
        value: { en: "Family Archive", de: "Family Archive" }
      },
      {
        key: "notes",
        value: { en: "Edition of 5 archival pigment prints available", de: "Edition von 5 Pigmentdrucken verfügbar" }
      }
    ]
  },
  {
    id: "berlin-fragments",
    slug: "berlin-fragments",
    title: {
      en: "Berlin Fragments",
      de: "Berlin Fragments"
    },
    year: "2024",
    medium: "Digital illustration",
    dimensions: "4000 × 3000 px",
    thumbnail: "/images/placeholder.svg",
    images: [
      {
        src: "/images/placeholder.svg",
        alt: {
          en: "Digital illustration layering brutalist architecture with handwritten notes by Aggelos Giannoulis.",
          de: "Digitale Illustration mit brutalistischer Architektur und handschriftlichen Notizen von Aggelos Giannoulis."
        }
      }
    ],
    shortDescription: {
      en: "A digital collage mapping Berlin's brutalist architecture against handwritten notes from daily sketch walks.",
      de: "Eine digitale Collage, die Berlins brutalistische Architektur mit handschriftlichen Notizen aus täglichen Skizzen-Spaziergängen verknüpft."
    },
    longDescription: {
      en: "Berlin Fragments is designed for both print and screen. The illustration pivots between precise vector geometry and loose tablet drawing, reflecting the push and pull between order and improvisation in Aggelos's practice.",
      de: "Berlin Fragments ist sowohl für Druck als auch Screen konzipiert. Die Illustration wechselt zwischen präziser Vektorgeometrie und lockerer Tablet-Zeichnung und spiegelt das Spannungsverhältnis von Ordnung und Improvisation in Aggelos' Praxis wider."
    },
    metadata: [
      {
        key: "series",
        value: { en: "City Notes", de: "City Notes" }
      },
      {
        key: "usage",
        value: { en: "Commissioned for Urban Layers zine, 2024", de: "Auftragsarbeit für das Urban Layers Zine, 2024" }
      }
    ]
  },
  {
    id: "mnemonic-garden",
    slug: "mnemonic-garden",
    title: {
      en: "Mnemonic Garden",
      de: "Mnemonic Garden"
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
          de: "Expressives Blumen-Ölgemälde mit Pastellakzenten von Aggelos Giannoulis."
        }
      }
    ],
    shortDescription: {
      en: "Floral motifs dissolve into abstract patches of light, tracing how scent and color trigger early memories.",
      de: "Florale Motive lösen sich in abstrakte Lichtfelder auf und zeigen, wie Geruch und Farbe frühe Erinnerungen auslösen."
    },
    longDescription: {
      en: "Mnemonic Garden was painted after interviews with family members about childhood courtyards. The palette is pulled from old film photographs, while pastel lines map the stories told during those conversations.",
      de: "Mnemonic Garden entstand nach Interviews mit Familienmitgliedern über Kindheitshöfe. Die Palette stammt aus alten Filmfotografien, während Pastelllinien die während der Gespräche erzählten Geschichten nachzeichnen."
    },
    metadata: [
      {
        key: "series",
        value: { en: "Scent Studies", de: "Scent Studies" }
      },
      {
        key: "availability",
        value: { en: "In private collection, Thessaloniki", de: "In privater Sammlung, Thessaloniki" }
      }
    ]
  },
  {
    id: "threshold-figures",
    slug: "threshold-figures",
    title: {
      en: "Threshold Figures",
      de: "Threshold Figures"
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
          de: "Tuschtriptychon mit transparenten Figuren, die eine Türschwelle überschreiten, von Aggelos Giannoulis."
        }
      }
    ],
    shortDescription: {
      en: "Translucent figures printed on layered rice paper explore the sensation of hovering between two homes.",
      de: "Transparente Figuren auf geschichtetem Reispapier erforschen das Gefühl, zwischen zwei Heimaten zu schweben."
    },
    longDescription: {
      en: "Threshold Figures was created using water-soluble ink pressed between sheets of rice paper and plexiglass. Each layer shifts slightly, casting double shadows that mimic the flicker of movement at a doorway.",
      de: "Threshold Figures entstand mit wasserlöslicher Tinte, die zwischen Reispapier und Plexiglas gepresst wurde. Jede Schicht verschiebt sich minimal und wirft doppelte Schatten, die das Flimmern einer Bewegung an der Türschwelle nachahmen."
    },
    metadata: [
      {
        key: "series",
        value: { en: "Between Homes", de: "Between Homes" }
      },
      {
        key: "notes",
        value: { en: "Includes installation view photographs on request", de: "Installationsansichten auf Anfrage erhältlich" }
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
