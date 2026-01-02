import Link from 'next/link';

const translations = {
  title: {
    en: '404',
    de: '404',
  },
  heading: {
    en: 'Page Not Found',
    de: 'Seite nicht gefunden',
  },
  message: {
    en: "The page you're looking for doesn't exist or has been moved.",
    de: 'Die gesuchte Seite existiert nicht oder wurde verschoben.',
  },
  backHome: {
    en: 'Back to Home',
    de: 'Zurück zur Startseite',
  },
};

export default function NotFound() {
  // Note: This is a server component, so we can't use useLanguage hook directly
  // We'll default to English, but in a real scenario you might want to detect language from headers
  const language: 'en' | 'de' = 'en';

  return (
    <div className="container min-h-screen flex flex-col items-center justify-center pt-32 pb-20">
      <div className="text-center max-w-2xl">
        <h1 className="text-9xl md:text-[12rem] font-serif mb-8 italic leading-none">
          {translations.title[language]}
        </h1>
        <h2 className="text-3xl md:text-5xl font-serif mb-8 italic">
          {translations.heading[language]}
        </h2>
        <p className="text-muted text-lg mb-12 max-w-md mx-auto">
          {translations.message[language]}
        </p>
        <Link
          href="/"
          className="inline-flex h-16 items-center px-12 border border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background transition-all text-xs uppercase tracking-[0.3em]"
        >
          {translations.backHome[language]}
        </Link>
      </div>
    </div>
  );
}
