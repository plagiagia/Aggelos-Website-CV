'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/lib/i18n';
import Image from 'next/image';

const cvData = {
  education: [
    {
      year: '2019 – 2025',
      title: {
        en: 'Integrated Master of Fine Arts — Painting',
        de: 'Integrierter Master of Fine Arts — Malerei',
        el: 'Ενιαίο Μεταπτυχιακό Τίτλο (Integrated Master) — Ζωγραφική'
      },
      institution: {
        en: 'Aristotle University of Thessaloniki',
        de: 'Aristoteles-Universität Thessaloniki',
        el: 'Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης'
      },
      details: {
        en: 'Grade: 9.37/10 (Excellent) | Thesis: 9.85/10',
        de: 'Note: 9,37/10 (Ausgezeichnet) | Thesis: 9,85/10',
        el: 'Βαθμός: 9,37/10 (Άριστα) | Διπλωματική: 9,85/10'
      }
    }
  ],
  coursework: [
    {
      category: { en: 'Studio Practice', de: 'Atelierpraxis', el: 'Καλλιτεχνική Εργασία' },
      items: {
        en: 'Advanced Painting, Drawing, New Media, Printmaking',
        de: 'Fortgeschrittene Malerei, Zeichnung, Neue Medien, Drucktechniken',
        el: 'Προχωρημένη Ζωγραφική, Σχέδιο, Νέα Μέσα, Χαρακτική'
      }
    },
    {
      category: { en: 'Theory', de: 'Theorie', el: 'Θεωρία' },
      items: {
        en: 'History of Art, Aesthetics, Contemporary Discourse',
        de: 'Kunstgeschichte, Ästhetik, Zeitgenössischer Diskurs',
        el: 'Ιστορία της Τέχνης, Αισθητική, Σύγχρονος Καλλιτεχνικός Λόγος'
      }
    }
  ],
  academicProjects: [
    {
      title: { en: "Master's Thesis — Distinction", de: 'Masterarbeit — Auszeichnung', el: 'Διπλωματική Εργασία — Άριστα' },
      description: {
        en: 'Research-led investigation into contemporary painting methodologies.',
        de: 'Forschungsgeleitete Untersuchung zeitgenössischer Malereimethoden.',
        el: 'Ερευνητική διερεύνηση σύγχρονων μεθοδολογιών ζωγραφικής.'
      }
    }
  ],
  skills: {
    artistic: {
      en: 'Painting (oil, mixed media), Drawing, Composition, Exhibition Installation',
      de: 'Malerei (Öl, Mixed Media), Zeichnung, Komposition, Ausstellungsinstallation',
      el: 'Ζωγραφική (λάδι, μικτή τεχνική), Σχέδιο, Σύνθεση, Εγκατάσταση Εκθέσεων'
    },
    digital: {
      en: 'Adobe Creative Suite, Procreate, Digital Photography',
      de: 'Adobe Creative Suite, Procreate, Digitalfotografie',
      el: 'Adobe Creative Suite, Procreate, Ψηφιακή Φωτογραφία'
    }
  }
};

export default function AboutPage() {
  const { language } = useLanguage();

  return (
    <div className="pb-40 pt-32">
      {/* Intro Section */}
      <section className="container mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <div className="lg:col-span-5 reveal">
            <div className="relative aspect-[4/5] bg-card overflow-hidden">
              <Image
                src="/images/artist-portrait.png"
                alt="Aggelos Giannoulis portrait"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <p className="label mt-8 text-muted">Aggelos Giannoulis, 2025</p>
          </div>
          <div className="lg:col-span-7 reveal del-1">
            <h1 className="text-6xl md:text-8xl font-serif mb-12 italic leading-tight">
              {t('about.title', language)}
            </h1>
            <div className="prose">
              <p className="text-xl md:text-2xl text-foreground mb-12 font-light leading-relaxed">
                {t('about.bio', language)}
              </p>
              <div className="space-y-8 text-muted">
                {(t('home.statement', language) || '').split('\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section className="container border-t border-border/40 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 reveal">
            <h2 className="text-3xl md:text-4xl font-serif italic mb-12 px-2 border-l-2 border-accent/20">
              {t('about.cvTitle', language)}
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-24">
            {/* Education */}
            <div className="reveal del-1">
              <h3 className="label mb-12 opacity-40">{t('about.education', language)}</h3>
              {cvData.education.map((item, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex justify-between items-baseline border-b border-border/40 pb-4">
                    <h4 className="text-xl md:text-2xl font-serif italic">{(item.title as any)[language]}</h4>
                    <span className="text-xs uppercase tracking-widest opacity-60">{item.year}</span>
                  </div>
                  <p className="text-lg text-muted">{(item.institution as any)[language]}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-accent/60">{(item.details as any)[language]}</p>
                </div>
              ))}
            </div>

            {/* Competencies */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 reveal del-2">
              <div>
                <h3 className="label mb-8 opacity-40">{t('about.competencies', language)}</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest mb-4 opacity-100 italic">Fine Art</h4>
                    <p className="text-sm text-muted leading-relaxed">{(cvData.skills.artistic as any)[language]}</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest mb-4 opacity-100 italic">Digital</h4>
                    <p className="text-sm text-muted leading-relaxed">{(cvData.skills.digital as any)[language]}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center text-center p-8 bg-card/30 border border-border/40 reveal del-3">
                <p className="text-xs uppercase tracking-[0.3em] mb-4 opacity-40">
                  {language === 'el' ? 'ΔΙΑΘΕΣΙΜΟΣ ΓΙΑ' : language === 'de' ? 'VERFÜGBAR FÜR' : 'Available For'}
                </p>
                <p className="text-lg font-serif italic">
                  {language === 'el'
                    ? 'Αναθέσεις, Συνεργασίες, \n & Εκθέσεις'
                    : language === 'de'
                      ? 'Auftragsarbeiten, Kooperationen, \n & Ausstellungen'
                      : 'Commissions, Collaborations, \n & Exhibitions'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
