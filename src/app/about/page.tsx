'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/lib/i18n';

const cvData = {
  education: [
    {
      year: '2019 – 2025',
      title: {
        en: 'Integrated Master of Fine Arts (M.F.A.) — Painting',
        de: 'Integrierter Master of Fine Arts (M.F.A.) — Malerei'
      },
      institution: {
        en: 'Aristotle University of Thessaloniki (A.U.Th.) | School of Fine & Applied Arts',
        de: 'Aristoteles-Universität Thessaloniki (A.U.Th.) | Fakultät für Bildende und Angewandte Kunst'
      },
      details: {
        en: '300 ECTS credits across 10 semesters | Final grade: 9.37/10 (Excellent) | Thesis: 9.85/10',
        de: '300 ECTS-Credits über 10 Semester | Abschlussnote: 9,37/10 (Ausgezeichnet) | Thesis: 9,85/10'
      }
    }
  ],
  coursework: [
    {
      category: { en: 'Studio Practice', de: 'Atelierpraxis' },
      items: {
        en: 'Advanced Painting I–VIII, Drawing I–II, Sculptural Elements, Introduction to New Media in Fine Arts I–II, Printmaking Techniques',
        de: 'Fortgeschrittene Malerei I–VIII, Zeichnung I–II, Skulpturale Elemente, Einführung in Neue Medien in der Bildenden Kunst I–II, Drucktechniken'
      }
    },
    {
      category: { en: 'Theory & History', de: 'Theorie & Geschichte' },
      items: {
        en: 'History of Art I–IV, Aesthetics I–II, Contemporary Art Discourse, Critical Theory',
        de: 'Kunstgeschichte I–IV, Ästhetik I–II, Zeitgenössischer Kunstdiskurs, Kritische Theorie'
      }
    },
    {
      category: { en: 'Pedagogy', de: 'Pädagogik' },
      items: {
        en: 'Teaching Approach of Art I–II (including supervised classroom practicum), Lesson Planning & Curriculum Development',
        de: 'Kunstvermittlung I–II (inkl. betreutes Unterrichtspraktikum), Unterrichtsplanung & Curriculum-Entwicklung'
      }
    },
    {
      category: { en: 'Professional Development', de: 'Berufliche Weiterbildung' },
      items: {
        en: 'English Terminology in Fine Arts I–IV (specialized vocabulary for international art contexts)',
        de: 'Englische Fachterminologie in der Bildenden Kunst I–IV (Fachwortschatz für internationale Kunstkontexte)'
      }
    }
  ],
  academicProjects: [
    {
      title: { en: "Master's Thesis (Painting) — Grade: 9.85/10", de: 'Masterarbeit (Malerei) — Note: 9,85/10' },
      description: {
        en: 'Conducted research-led studio investigation culminating in cohesive body of original work. Demonstrated advanced technical proficiency in painting while engaging with contemporary theoretical frameworks. Presented thesis work through comprehensive written documentation and professional exhibition-style presentation, receiving distinction-level evaluation from faculty committee.',
        de: 'Durchführung einer forschungsgeleiteten Atelieruntersuchung, die in einem zusammenhängenden Werk origineller Arbeiten gipfelte. Nachweis fortgeschrittener technischer Fähigkeiten in der Malerei bei gleichzeitiger Auseinandersetzung mit zeitgenössischen theoretischen Rahmenwerken. Präsentation der Abschlussarbeit durch umfassende schriftliche Dokumentation und professionelle Ausstellungspräsentation, mit Bewertung auf Auszeichnungsniveau durch die Fakultätskommission.'
      }
    },
    {
      title: { en: 'Advanced Painting Studios (VII–VIII)', de: 'Fortgeschrittene Malereistudios (VII–VIII)' },
      description: {
        en: 'Developed mature studio practice through sustained investigation of conceptual and material concerns. Participated in intensive peer critique sessions and iterative refinement processes. Successfully presented resolved work in professional exhibition format, demonstrating ability to communicate artistic intent and respond to critical feedback.',
        de: 'Entwicklung einer ausgereiften Atelierpraxis durch anhaltende Untersuchung konzeptueller und materieller Fragestellungen. Teilnahme an intensiven Peer-Kritik-Sitzungen und iterativen Verfeinerungsprozessen. Erfolgreiche Präsentation abgeschlossener Arbeiten im professionellen Ausstellungsformat mit der Fähigkeit, künstlerische Absichten zu kommunizieren und auf kritisches Feedback zu reagieren.'
      }
    },
    {
      title: { en: 'New Media Fundamentals', de: 'Grundlagen Neuer Medien' },
      description: {
        en: 'Explored interdisciplinary approaches at the intersection of traditional painting practice and digital/new media technologies. Investigated hybrid methodologies integrating analog and digital processes, expanding conceptual and technical toolkit for contemporary art production.',
        de: 'Erkundung interdisziplinärer Ansätze an der Schnittstelle von traditioneller Malerei und digitalen/neuen Medientechnologien. Untersuchung hybrider Methoden zur Integration analoger und digitaler Prozesse, Erweiterung des konzeptuellen und technischen Werkzeugkastens für zeitgenössische Kunstproduktion.'
      }
    },
    {
      title: { en: 'Art Education & Pedagogy', de: 'Kunsterziehung & Pädagogik' },
      description: {
        en: 'Completed comprehensive training in art education methodology, including curriculum design, lesson planning, and classroom management. Executed supervised teaching practicum, developing and delivering age-appropriate art lessons that fostered creative expression and technical skill development in students.',
        de: 'Absolvierung einer umfassenden Ausbildung in Kunstpädagogik, einschließlich Curriculum-Design, Unterrichtsplanung und Klassenführung. Durchführung eines betreuten Unterrichtspraktikums, Entwicklung und Durchführung altersgerechter Kunstunterrichtseinheiten zur Förderung kreativen Ausdrucks und technischer Fertigkeiten bei Schülern.'
      }
    }
  ],
  skills: {
    artistic: {
      title: { en: 'Artistic & Technical Skills', de: 'Künstlerische & Technische Fähigkeiten' },
      items: {
        en: 'Painting (oil, acrylic, mixed media) • Drawing & sketching • Color theory & application • Compositional design • Printmaking techniques • New media integration • Exhibition installation & artwork handling • Studio management • Art historical research • Critical analysis & aesthetics',
        de: 'Malerei (Öl, Acryl, Mixed Media) • Zeichnung & Skizzieren • Farbtheorie & -anwendung • Kompositionsdesign • Drucktechniken • Integration neuer Medien • Ausstellungsinstallation & Kunstwerkhandhabung • Ateliermanagement • Kunsthistorische Forschung • Kritische Analyse & Ästhetik'
      }
    },
    digital: {
      title: { en: 'Digital & Technical Proficiency', de: 'Digitale & Technische Kompetenz' },
      items: {
        en: 'Adobe Creative Suite (Photoshop, Illustrator, Lightroom) • Procreate (digital illustration) • Digital photography (DSLR) • Image scanning & archiving • Portfolio documentation',
        de: 'Adobe Creative Suite (Photoshop, Illustrator, Lightroom) • Procreate (digitale Illustration) • Digitalfotografie (DSLR) • Bildscanning & Archivierung • Portfolio-Dokumentation'
      }
    },
    professional: {
      title: { en: 'Professional Attributes', de: 'Berufliche Eigenschaften' },
      items: {
        en: 'Collaborative teamwork • Receptiveness to critique • Self-directed learning • Time management • Project planning & execution • Adaptability • Strong work ethic • Professional communication',
        de: 'Teamarbeit • Offenheit für Kritik • Selbstgesteuertes Lernen • Zeitmanagement • Projektplanung & -durchführung • Anpassungsfähigkeit • Starke Arbeitsmoral • Professionelle Kommunikation'
      }
    }
  },
  languages: [
    {
      lang: { en: 'Greek', de: 'Griechisch' },
      level: { en: 'Native', de: 'Muttersprache' }
    },
    {
      lang: { en: 'English', de: 'Englisch' },
      level: { en: 'Advanced — including specialized art terminology for international contexts', de: 'Fortgeschritten — einschließlich spezialisierter Kunstterminologie für internationale Kontexte' }
    }
  ],
  qualifications: {
    en: "Integrated Master's degree confers eligibility for professional registration with the Hellenic Chamber of Visual Arts (EETE)",
    de: 'Der integrierte Masterabschluss berechtigt zur Berufsregistrierung bei der Griechischen Kammer der Bildenden Kunst (EETE)'
  }
};

const artistStatement = {
  en: [
    "My artistic practice is grounded in rigorous academic training and a deep commitment to the tradition of painting. Through my studies at the Aristotle University of Thessaloniki, I have developed a comprehensive understanding of both classical techniques and contemporary approaches, enabling me to engage with painting as both a historical discipline and a living, evolving medium.",
    "Central to my work is the exploration of visual language through color, composition, and material. I approach each painting as an investigation—testing the boundaries of traditional methods while remaining open to the possibilities offered by new media and interdisciplinary practices. This balance between foundation and experimentation defines my studio work.",
    "My pedagogical training has profoundly shaped how I think about art-making. Teaching requires clarity of thought and the ability to articulate complex ideas, skills I now apply to my own practice. I believe that art has the power to communicate across boundaries, and I am committed to creating work that invites dialogue and reflection.",
    "Looking forward, I am dedicated to continuous artistic development and professional excellence. I seek opportunities to contribute to the visual arts community through studio practice, exhibition, collaboration, and education."
  ],
  de: [
    "Meine künstlerische Praxis basiert auf einer fundierten akademischen Ausbildung und einem tiefen Engagement für die Tradition der Malerei. Durch mein Studium an der Aristoteles-Universität Thessaloniki habe ich ein umfassendes Verständnis sowohl klassischer Techniken als auch zeitgenössischer Ansätze entwickelt, das es mir ermöglicht, mich mit der Malerei als historischer Disziplin und als lebendigem, sich entwickelndem Medium auseinanderzusetzen.",
    "Im Zentrum meiner Arbeit steht die Erforschung visueller Sprache durch Farbe, Komposition und Material. Ich betrachte jedes Gemälde als eine Untersuchung – die Grenzen traditioneller Methoden austestend, während ich offen bleibe für die Möglichkeiten, die neue Medien und interdisziplinäre Praktiken bieten. Diese Balance zwischen Fundament und Experiment definiert meine Atelierarbeit.",
    "Meine pädagogische Ausbildung hat tiefgreifend beeinflusst, wie ich über das Kunstschaffen nachdenke. Lehren erfordert Klarheit des Denkens und die Fähigkeit, komplexe Ideen zu artikulieren – Fähigkeiten, die ich nun in meiner eigenen Praxis anwende. Ich glaube, dass Kunst die Kraft hat, über Grenzen hinweg zu kommunizieren, und ich bin entschlossen, Werke zu schaffen, die zum Dialog und zur Reflexion einladen.",
    "Mit Blick auf die Zukunft widme ich mich der kontinuierlichen künstlerischen Entwicklung und professionellen Exzellenz. Ich suche nach Möglichkeiten, zur Gemeinschaft der bildenden Kunst beizutragen – durch Atelierpraxis, Ausstellung, Zusammenarbeit und Bildung."
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

        {/* Education */}
        <div className="mb-16">
          <h3 className="label mb-6">{t('about.education', language)}</h3>
          {cvData.education.map((item, index) => (
            <div key={index} className="mb-6">
              <p className="text-sm text-muted mb-1">{item.year} • Thessaloniki, Greece</p>
              <p className="text-lg font-medium mb-1">{item.title[language]}</p>
              <p className="text-sm text-muted mb-2">{item.institution[language]}</p>
              <p className="text-sm font-medium">{item.details[language]}</p>
            </div>
          ))}

          {/* Key Coursework */}
          <div className="mt-8 pl-4 border-l-2 border-border">
            <p className="label mb-4">{language === 'en' ? 'Key Coursework & Competencies' : 'Schlüsselkurse & Kompetenzen'}</p>
            <div className="space-y-3">
              {cvData.coursework.map((course, index) => (
                <div key={index}>
                  <p className="text-sm font-medium">{course.category[language]}</p>
                  <p className="text-sm text-muted">{course.items[language]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Academic Projects */}
        <div className="mb-16">
          <h3 className="label mb-6">{t('about.academicProjects', language)}</h3>
          <div className="space-y-8">
            {cvData.academicProjects.map((project, index) => (
              <div key={index}>
                <p className="text-sm font-medium mb-2">{project.title[language]}</p>
                <p className="text-sm text-muted">{project.description[language]}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Competencies */}
        <div className="mb-16">
          <h3 className="label mb-6">{t('about.competencies', language)}</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <p className="text-sm font-medium mb-2">{cvData.skills.artistic.title[language]}</p>
              <p className="text-sm text-muted">{cvData.skills.artistic.items[language]}</p>
            </div>
            <div>
              <p className="text-sm font-medium mb-2">{cvData.skills.digital.title[language]}</p>
              <p className="text-sm text-muted">{cvData.skills.digital.items[language]}</p>
            </div>
            <div>
              <p className="text-sm font-medium mb-2">{cvData.skills.professional.title[language]}</p>
              <p className="text-sm text-muted">{cvData.skills.professional.items[language]}</p>
            </div>
          </div>
        </div>

        {/* Languages & Qualifications */}
        <div>
          <h3 className="label mb-6">{t('about.languages', language)}</h3>
          <div className="space-y-3 mb-6">
            {cvData.languages.map((item, index) => (
              <p key={index} className="text-sm">
                <span className="font-medium">{item.lang[language]}</span>
                <span className="text-muted"> — {item.level[language]}</span>
              </p>
            ))}
          </div>
          <div className="mt-6 p-4 bg-gray-50 border border-border">
            <p className="text-sm">
              <span className="font-medium">{language === 'en' ? 'Professional Status: ' : 'Beruflicher Status: '}</span>
              <span className="text-muted">{cvData.qualifications[language]}</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
