'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/lib/i18n';

export default function ContactPage() {
  const { language } = useLanguage();

  return (
    <div className="container pt-12 md:pt-16 pb-20 md:pb-32">
      {/* Header */}
      <div className="max-w-2xl mb-16 md:mb-24">
        <h1 className="text-4xl md:text-5xl mb-6">{t('contact.title', language)}</h1>
        <p className="text-lg text-muted">
          {t('contact.subtitle', language)}
        </p>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Column - Contact Details */}
        <div className="space-y-8">
          {/* Email */}
          <div>
            <p className="label mb-2">{t('contact.email', language)}</p>
            <p className="text-lg text-muted italic">
              {language === 'en' ? '[Available upon request]' : '[Auf Anfrage verfügbar]'}
            </p>
          </div>

          {/* Phone */}
          <div>
            <p className="label mb-2">{t('contact.phone', language)}</p>
            <p className="text-lg text-muted italic">
              {language === 'en' ? '[Available upon request]' : '[Auf Anfrage verfügbar]'}
            </p>
          </div>

          {/* Location */}
          <div>
            <p className="label mb-2">{t('contact.location', language)}</p>
            <p className="text-lg">Thessaloniki, Greece</p>
          </div>

          {/* Social */}
          <div>
            <p className="label mb-2">{t('contact.social', language)}</p>
            <div className="flex gap-6">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:opacity-70 transition-opacity"
              >
                Instagram
              </a>
              <a
                href="https://www.behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:opacity-70 transition-opacity"
              >
                Behance
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:opacity-70 transition-opacity"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="label block mb-2">
                {language === 'en' ? 'Name' : 'Name'}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-0 py-3 bg-transparent border-0 border-b border-border focus:border-foreground focus:outline-none transition-colors"
                placeholder={language === 'en' ? 'Your name' : 'Ihr Name'}
              />
            </div>

            <div>
              <label htmlFor="email" className="label block mb-2">
                {t('contact.email', language)}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-0 py-3 bg-transparent border-0 border-b border-border focus:border-foreground focus:outline-none transition-colors"
                placeholder={language === 'en' ? 'your@email.com' : 'ihre@email.com'}
              />
            </div>

            <div>
              <label htmlFor="subject" className="label block mb-2">
                {language === 'en' ? 'Subject' : 'Betreff'}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-0 py-3 bg-transparent border-0 border-b border-border focus:border-foreground focus:outline-none transition-colors"
                placeholder={language === 'en' ? 'What is this about?' : 'Worum geht es?'}
              />
            </div>

            <div>
              <label htmlFor="message" className="label block mb-2">
                {language === 'en' ? 'Message' : 'Nachricht'}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-0 py-3 bg-transparent border-0 border-b border-border focus:border-foreground focus:outline-none transition-colors resize-none"
                placeholder={language === 'en' ? 'Tell me about your project...' : 'Erzählen Sie mir von Ihrem Projekt...'}
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="inline-block border border-foreground px-8 py-3 text-sm hover:bg-foreground hover:text-background transition-colors"
              >
                {language === 'en' ? 'Send Message' : 'Nachricht senden'}
              </button>
            </div>

            <p className="text-xs text-muted-foreground">
              {language === 'en'
                ? 'This form is a placeholder. Connect it to your preferred email service.'
                : 'Dieses Formular ist ein Platzhalter. Verbinden Sie es mit Ihrem bevorzugten E-Mail-Dienst.'}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
