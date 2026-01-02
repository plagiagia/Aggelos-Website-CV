'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

const translations = {
  title: {
    en: 'Something went wrong',
    de: 'Etwas ist schiefgelaufen',
  },
  message: {
    en: "We're sorry, but something unexpected happened. Please try again later.",
    de: 'Entschuldigung, es ist etwas Unerwartetes passiert. Bitte versuchen Sie es später erneut.',
  },
  tryAgain: {
    en: 'Try Again',
    de: 'Erneut versuchen',
  },
  backHome: {
    en: 'Back to Home',
    de: 'Zurück zur Startseite',
  },
};

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { language } = useLanguage();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="container min-h-screen flex flex-col items-center justify-center pt-32 pb-20">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-serif mb-8 italic leading-tight">
          {translations.title[language]}
        </h1>
        <p className="text-muted text-lg mb-12 max-w-md mx-auto">
          {translations.message[language]}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex h-16 items-center px-12 border border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background transition-all text-xs uppercase tracking-[0.3em]"
          >
            {translations.tryAgain[language]}
          </button>
          <Link
            href="/"
            className="inline-flex h-16 items-center px-12 border border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background transition-all text-xs uppercase tracking-[0.3em]"
          >
            {translations.backHome[language]}
          </Link>
        </div>
      </div>
    </div>
  );
}
