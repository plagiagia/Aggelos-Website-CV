'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/LanguageContext';
import { t, languages, languageNames } from '@/lib/i18n';

export default function Header() {
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();

  const navItems = [
    { href: '/works', label: 'nav.works' },
    { href: '/about', label: 'nav.about' },
    { href: '/contact', label: 'nav.contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Name */}
          <Link
            href="/"
            className="text-lg md:text-xl font-normal tracking-tight hover:opacity-100"
          >
            Aggelos Giannoulis
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-6 md:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wide transition-opacity ${
                  isActive(item.href)
                    ? 'opacity-100'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                {t(item.label, language)}
              </Link>
            ))}

            {/* Language Toggle */}
            <div className="flex items-center gap-1 ml-2 md:ml-4">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`text-xs tracking-wider px-2 py-1 transition-opacity ${
                    language === lang
                      ? 'opacity-100 font-medium'
                      : 'opacity-40 hover:opacity-70'
                  }`}
                  aria-label={`Switch to ${lang === 'en' ? 'English' : 'German'}`}
                >
                  {languageNames[lang]}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
