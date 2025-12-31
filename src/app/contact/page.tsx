'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/lib/i18n';

export default function ContactPage() {
  const { language } = useLanguage();

  const labels = {
    locationDetail: {
      en: 'Thessaloniki, Greece \n & Berlin, Germany',
      de: 'Thessaloniki, Griechenland \n & Berlin, Deutschland',
      el: 'Θεσσαλονίκη, Ελλάδα \n & Βερολίνο, Γερμανία'
    },
    responseTime: {
      title: {
        en: 'Response Time',
        de: 'Reaktionszeit',
        el: 'Χρόνος Απόκρισης'
      },
      text: {
        en: 'Typically responds within 48 hours for serious inquiries.',
        de: 'Antwortet in der Regel innerhalb von 48 Stunden auf ernsthafte Anfragen.',
        el: 'Συνήθης χρόνος απόκρισης εντός 48 ωρών για σοβαρές προτάσεις.'
      }
    },
    form: {
      name: {
        en: 'Full Name',
        de: 'Vollständiger Name',
        el: 'Ονοματεπώνυμο'
      },
      message: {
        en: 'Inquiry Details',
        de: 'Details der Anfrage',
        el: 'Λεπτομέρειες Αιτήματος'
      },
      submit: {
        en: 'Submit Inquiry',
        de: 'Anfrage senden',
        el: 'Υποβολή Αιτήματος'
      }
    }
  };

  return (
    <div className="pb-40 pt-32">
      {/* Header */}
      <section className="container mb-24 reveal">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif mb-12 italic leading-tight">
            {t('contact.title', language)}
          </h1>
          <p className="text-xl md:text-2xl text-muted max-w-2xl leading-relaxed">
            {t('contact.subtitle', language)}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          {/* Details Column */}
          <div className="lg:col-span-5 space-y-20 reveal del-1">
            <div className="space-y-4">
              <p className="label opacity-40">{t('contact.location', language)}</p>
              <p className="text-2xl font-serif italic whitespace-pre-line">
                {(labels.locationDetail as any)[language]}
              </p>
            </div>

            <div className="space-y-4">
              <p className="label opacity-40">{t('contact.social', language)}</p>
              <div className="flex flex-col gap-4">
                {['Instagram', 'Behance', 'LinkedIn'].map((link) => (
                  <a key={link} href="#" className="text-xl hover:translate-x-2 transition-transform inline-block w-fit font-serif italic mb-1 border-b border-transparent hover:border-accent/40">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div className="p-8 bg-card border border-border/40">
              <p className="text-xs uppercase tracking-widest text-muted mb-4 italic">
                {(labels.responseTime.title as any)[language]}
              </p>
              <p className="text-sm">
                {(labels.responseTime.text as any)[language]}
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 reveal del-2">
            <form className="space-y-12">
              <div className="relative group">
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-border/60 py-4 focus:outline-none focus:border-accent transition-all peer placeholder:text-transparent"
                  placeholder="Name"
                  id="name"
                />
                <label htmlFor="name" className="absolute left-0 top-4 text-xs uppercase tracking-widest text-muted transition-all peer-focus:-top-4 peer-focus:text-accent peer-[:not(:placeholder-shown)]:-top-4">
                  {(labels.form.name as any)[language]}
                </label>
              </div>

              <div className="relative group">
                <input
                  type="email"
                  required
                  className="w-full bg-transparent border-b border-border/60 py-4 focus:outline-none focus:border-accent transition-all peer placeholder:text-transparent"
                  placeholder="Email"
                  id="email"
                />
                <label htmlFor="email" className="absolute left-0 top-4 text-xs uppercase tracking-widest text-muted transition-all peer-focus:-top-4 peer-focus:text-accent peer-[:not(:placeholder-shown)]:-top-4">
                  {t('contact.email', language)}
                </label>
              </div>

              <div className="relative group">
                <textarea
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-border/60 py-4 focus:outline-none focus:border-accent transition-all peer placeholder:text-transparent resize-none"
                  placeholder="Message"
                  id="message"
                />
                <label htmlFor="message" className="absolute left-0 top-4 text-xs uppercase tracking-widest text-muted transition-all peer-focus:-top-4 peer-focus:text-accent peer-[:not(:placeholder-shown)]:-top-4">
                  {(labels.form.message as any)[language]}
                </label>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto h-16 px-16 bg-accent text-background text-xs uppercase tracking-[0.3em] hover:opacity-90 transition-opacity"
              >
                {(labels.form.submit as any)[language]}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
