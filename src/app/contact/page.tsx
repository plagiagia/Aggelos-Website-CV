'use client';

import { useState, FormEvent } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/lib/i18n';
import { socialLinks, email } from '@/config/social';

export default function ContactPage() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '', // Spam protection
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const labels = {
    locationDetail: {
      en: 'Thessaloniki, Greece \n & Berlin, Germany',
      de: 'Thessaloniki, Griechenland \n & Berlin, Deutschland'
    },
    responseTime: {
      title: {
        en: 'Response Time',
        de: 'Reaktionszeit'
      },
      text: {
        en: 'Typically responds within 48 hours for serious inquiries.',
        de: 'Antwortet in der Regel innerhalb von 48 Stunden auf ernsthafte Anfragen.'
      }
    },
    form: {
      name: {
        en: 'Full Name',
        de: 'Vollständiger Name'
      },
      message: {
        en: 'Inquiry Details',
        de: 'Details der Anfrage'
      },
      submit: {
        en: 'Submit Inquiry',
        de: 'Anfrage senden'
      },
      submitting: {
        en: 'Sending...',
        de: 'Wird gesendet...'
      },
      success: {
        en: 'Thank you! Your message has been sent successfully.',
        de: 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.'
      },
      error: {
        en: 'Failed to send message. Please try again.',
        de: 'Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.'
      },
      required: {
        en: 'This field is required',
        de: 'Dieses Feld ist erforderlich'
      },
      invalidEmail: {
        en: 'Please enter a valid email address',
        de: 'Bitte geben Sie eine gültige E-Mail-Adresse ein'
      }
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = labels.form.required[language];
    }

    if (!formData.email.trim()) {
      newErrors.email = labels.form.required[language];
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = labels.form.invalidEmail[language];
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = labels.form.required[language];
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          honeypot: formData.honeypot, // Spam protection
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '', honeypot: '' });
        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
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

      {/* Success/Error Messages */}
      {submitStatus === 'success' && (
        <div className="container mb-8 reveal">
          <div className="bg-accent/10 border border-accent/30 p-6 text-accent">
            <p>{labels.form.success[language]}</p>
          </div>
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="container mb-8 reveal">
          <div className="bg-red-500/10 border border-red-500/30 p-6 text-red-400">
            <p>{labels.form.error[language]}</p>
          </div>
        </div>
      )}

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
              <p className="label opacity-40">{t('contact.email', language)}</p>
              <a
                href={`mailto:${email}`}
                className="text-xl font-serif italic mb-1 border-b border-transparent hover:border-accent/40 transition-all inline-block"
              >
                {email}
              </a>
            </div>

            <div className="space-y-4">
              <p className="label opacity-40">{t('contact.social', language)}</p>
              <div className="flex flex-col gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl hover:translate-x-2 transition-transform inline-block w-fit font-serif italic mb-1 border-b border-transparent hover:border-accent/40"
                    aria-label={`Visit ${link.name} profile`}
                  >
                    {link.name}
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
            <form onSubmit={handleSubmit} className="space-y-12" noValidate>
              {/* Honeypot field for spam protection */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full bg-transparent border-b py-4 focus:outline-none transition-all peer placeholder:text-transparent ${
                    errors.name
                      ? 'border-red-500/50 focus:border-red-500'
                      : 'border-border/60 focus:border-accent'
                  }`}
                  placeholder="Name"
                  id="name"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                <label htmlFor="name" className="absolute left-0 top-4 text-xs uppercase tracking-widest text-muted transition-all peer-focus:-top-4 peer-focus:text-accent peer-[:not(:placeholder-shown)]:-top-4">
                  {(labels.form.name as any)[language]}
                </label>
                {errors.name && (
                  <p id="name-error" className="mt-2 text-xs text-red-400" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full bg-transparent border-b py-4 focus:outline-none transition-all peer placeholder:text-transparent ${
                    errors.email
                      ? 'border-red-500/50 focus:border-red-500'
                      : 'border-border/60 focus:border-accent'
                  }`}
                  placeholder="Email"
                  id="email"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                <label htmlFor="email" className="absolute left-0 top-4 text-xs uppercase tracking-widest text-muted transition-all peer-focus:-top-4 peer-focus:text-accent peer-[:not(:placeholder-shown)]:-top-4">
                  {t('contact.email', language)}
                </label>
                {errors.email && (
                  <p id="email-error" className="mt-2 text-xs text-red-400" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="relative group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  maxLength={2000}
                  className={`w-full bg-transparent border-b py-4 focus:outline-none transition-all peer placeholder:text-transparent resize-none ${
                    errors.message
                      ? 'border-red-500/50 focus:border-red-500'
                      : 'border-border/60 focus:border-accent'
                  }`}
                  placeholder="Message"
                  id="message"
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : 'message-count'}
                />
                <label htmlFor="message" className="absolute left-0 top-4 text-xs uppercase tracking-widest text-muted transition-all peer-focus:-top-4 peer-focus:text-accent peer-[:not(:placeholder-shown)]:-top-4">
                  {(labels.form.message as any)[language]}
                </label>
                <div className="flex justify-between items-center mt-2">
                  {errors.message ? (
                    <p id="message-error" className="text-xs text-red-400" role="alert">
                      {errors.message}
                    </p>
                  ) : (
                    <span id="message-count" className="text-xs text-muted">
                      {formData.message.length} / 2000
                    </span>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto h-16 px-16 bg-accent text-background text-xs uppercase tracking-[0.3em] hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                aria-busy={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin" />
                    {(labels.form.submitting as any)[language]}
                  </>
                ) : (
                  (labels.form.submit as any)[language]
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
