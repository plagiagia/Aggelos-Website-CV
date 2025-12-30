'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/lib/i18n';

const cvData = {
  education: [
    {
      year: '2019 – 2023',
      title: {
        en: 'Bachelor of Fine Arts, School of Fine Arts, Aristotle University of Thessaloniki (AUTH), GR',
        de: 'Bachelor of Fine Arts, School of Fine Arts, Aristoteles-Universität Thessaloniki (AUTH), GR'
      }
    },
    {
      year: '2022',
      title: {
        en: 'Erasmus+ exchange semester, Universität der Künste Berlin (UdK), DE – studio practice in painting & illustration',
        de: 'Erasmus+-Austauschsemester, Universität der Künste Berlin (UdK), DE – Atelierpraxis Malerei & Illustration'
      }
    }
  ],
  exhibitions: [
    {
      year: '2024',
      title: {
        en: 'Berlin Diaries – Group exhibition, Studio 45, Berlin, DE',
        de: 'Berlin Diaries – Gruppenausstellung, Studio 45, Berlin, DE'
      }
    },
    {
      year: '2023',
      title: {
        en: 'AUTH Graduate Show 2023 – Department of Fine Arts, Thessaloniki, GR',
        de: 'AUTH Graduate Show 2023 – Fachbereich Bildende Kunst, Thessaloniki, GR'
      }
    },
    {
      year: '2022',
      title: {
        en: 'In-Between/Transit – Student showcase, UdK Berlin, DE',
        de: 'In-Between/Transit – Studierendenpräsentation, UdK Berlin, DE'
      }
    }
  ],
  experience: [
    {
      year: '2024 – present',
      title: {
        en: 'Freelance illustrator & visual artist, Berlin – commissions for editorial clients and cultural organisations',
        de: 'Freiberuflicher Illustrator & Künstler, Berlin – Aufträge für Editorial-Kunden und Kulturinstitutionen'
      }
    },
    {
      year: '2023',
      title: {
        en: 'Gallery assistant (intern), Contemporary Art Center of Thessaloniki – installation support, visitor engagement, documentation',
        de: 'Galerieassistent (Praktikum), Contemporary Art Center of Thessaloniki – Aufbau, Besucherbetreuung, Dokumentation'
      }
    },
    {
      year: '2021 – 2022',
      title: {
        en: 'Teaching assistant, Drawing & Colour studio, AUTH – supported first-year workshops and critiques',
        de: 'Tutor im Zeichen- & Farbstudio, AUTH – Betreuung von Erstsemester-Workshops und Kritiken'
      }
    }
  ],
  skills: [
    {
      en: 'Painting (oil, acrylic, gouache); mixed media collage; life drawing; mural execution',
      de: 'Malerei (Öl, Acryl, Gouache); Mixed-Media-Collage; Aktzeichnen; Wandbild-Ausführung'
    },
    {
      en: 'Digital illustration (Procreate, Adobe Photoshop & Fresco); vector graphics (Illustrator)',
      de: 'Digitale Illustration (Procreate, Adobe Photoshop & Fresco); Vektorgrafik (Illustrator)'
    },
    {
      en: 'Photography & documentation for artworks; basic video editing (Premiere Pro)',
      de: 'Fotografie & Dokumentation von Kunstwerken; grundlegender Videoschnitt (Premiere Pro)'
    }
  ],
  languages: [
    { en: 'Greek – native', de: 'Griechisch – Muttersprache' },
    { en: 'English – fluent', de: 'Englisch – fließend' },
    { en: 'German – basic conversational (A2 progressing)', de: 'Deutsch – Grundkenntnisse (A2 in Fortschritt)' }
  ]
};

const artistStatement = {
  en: [
    "My work is driven by an urge to tell stories through images. Growing up in Thessaloniki's rich historical environment, I developed a fascination with how memory and place intertwine. In my paintings and illustrations, vibrant colors and textured layers depict the overlap of personal and collective history. I often use oil paint for its depth and tradition, layering it with modern materials – from printed photographs to digital collage – to create a conversation between past and present.",
    "A recurring theme in my art is the concept of transition and belonging. Having relocated from Greece to Germany, I reflect on the feeling of being \"in-between\" cultures. This experience surfaces as fragmented cityscapes, hybrid figures, and mythical symbols hidden in my compositions, inviting viewers to find their own narrative in the pieces.",
    "Process is important to me: my canvases usually begin with quick plein-air sketches or even spontaneous street photography, which I then deconstruct in the studio. Mistakes and chance occurrences (like a drip of paint or a torn paper piece) are embraced as integral parts of the final work, echoing the unpredictability of urban life.",
    "Ultimately, I aim for my art to spark dialogue – be it an internal dialogue within the viewer or a conversation across cultures. Art, for me, is a bridge: between my Greek roots and my new Berlin context, between classical fine art techniques and contemporary design, and most of all, between people."
  ],
  de: [
    "Mein Schaffen wird von dem Wunsch angetrieben, Geschichten durch Bilder zu erzählen. Aufgewachsen in der geschichtsträchtigen Umgebung Thessalonikis entwickelte ich eine Faszination dafür, wie Erinnerung und Orte miteinander verwoben sind. In meinen Gemälden und Illustrationen zeigen leuchtende Farben und strukturierte Schichten das Überlappen von persönlicher und kollektiver Geschichte. Ich verwende oft Ölfarbe wegen ihrer Tiefe und Tradition und kombiniere sie mit modernen Materialien – von gedruckten Fotografien bis zu digitalen Collagen – um einen Dialog zwischen Vergangenheit und Gegenwart zu erschaffen.",
    "Ein wiederkehrendes Thema in meiner Kunst ist der Übergang und die Zugehörigkeit. Nach meinem Umzug von Griechenland nach Deutschland reflektiere ich das Gefühl, 'zwischen' Kulturen zu stehen. Diese Erfahrung zeigt sich in fragmentierten Stadtlandschaften, hybriden Figuren und mythischen Symbolen, die in meinen Kompositionen verborgen sind und den Betrachter einladen, eine eigene Erzählung in den Werken zu finden.",
    "Der Prozess ist mir wichtig: Meine Leinwände beginnen meist mit schnellen Freilandskizzen oder spontanen Straßenfotografien, die ich dann im Studio dekonstruiere. Fehler und Zufälle (wie ein verlaufener Farbtropfen oder ein zerrissenes Papierstück) begreife ich als integralen Bestandteil des Endergebnisses – sie spiegeln die Unvorhersehbarkeit des urbanen Lebens wider.",
    "Letztendlich möchte ich, dass meine Kunst Dialoge anregt – sei es ein innerer Dialog beim Betrachter oder ein Gespräch über kulturelle Grenzen hinweg. Kunst ist für mich eine Brücke: zwischen meinen griechischen Wurzeln und meinem neuen Kontext in Berlin, zwischen klassischer bildender Kunst und modernem Design – und vor allem zwischen Menschen."
  ]
};

export default function AboutPage() {
  const { language } = useLanguage();

  return (
    <div className="container pt-12 md:pt-16 pb-20 md:pb-32">
      {/* Header */}
      <div className="max-w-3xl mb-16 md:mb-24">
        <h1 className="text-4xl md:text-5xl mb-6">{t('about.title', language)}</h1>
        <p className="text-lg text-muted">
          {t('about.bio', language)}
        </p>
      </div>

      {/* Artist Statement */}
      <section className="mb-20 md:mb-28">
        <h2 className="text-2xl md:text-3xl mb-8">{t('about.statementTitle', language)}</h2>
        <div className="max-w-3xl prose">
          {artistStatement[language].map((paragraph, index) => (
            <p key={index} className="text-muted mb-6">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* CV */}
      <section>
        <h2 className="text-2xl md:text-3xl mb-12">{t('about.cvTitle', language)}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Education */}
            <div>
              <h3 className="label mb-4">{t('about.education', language)}</h3>
              <div className="space-y-4">
                {cvData.education.map((item, index) => (
                  <div key={index}>
                    <p className="text-sm text-muted mb-1">{item.year}</p>
                    <p className="text-sm">{item.title[language]}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Exhibitions */}
            <div>
              <h3 className="label mb-4">{t('about.exhibitions', language)}</h3>
              <div className="space-y-4">
                {cvData.exhibitions.map((item, index) => (
                  <div key={index}>
                    <p className="text-sm text-muted mb-1">{item.year}</p>
                    <p className="text-sm">{item.title[language]}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="label mb-4">{t('about.experience', language)}</h3>
              <div className="space-y-4">
                {cvData.experience.map((item, index) => (
                  <div key={index}>
                    <p className="text-sm text-muted mb-1">{item.year}</p>
                    <p className="text-sm">{item.title[language]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Skills */}
            <div>
              <h3 className="label mb-4">{t('about.skills', language)}</h3>
              <div className="space-y-3">
                {cvData.skills.map((item, index) => (
                  <p key={index} className="text-sm">{item[language]}</p>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="label mb-4">{t('about.languages', language)}</h3>
              <div className="space-y-2">
                {cvData.languages.map((item, index) => (
                  <p key={index} className="text-sm">{item[language]}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
