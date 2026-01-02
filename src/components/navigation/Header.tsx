'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { languageNames, languages, t } from '@/lib/i18n';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';

export default function Header() {
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/40">
        <div className="container">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo / Name */}
            <Link
              href="/"
              className="text-xl md:text-2xl font-serif tracking-tight hover:opacity-100 reveal"
              aria-label="Home"
            >
              Aggelos Giannoulis
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 md:gap-12 reveal del-1">
              <div className="flex items-center gap-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-xs uppercase tracking-[0.2em] transition-all ${isActive(item.href)
                      ? 'opacity-100 translate-y-[-1px]'
                      : 'opacity-50 hover:opacity-100'
                      }`}
                  >
                    {t(item.label, language)}
                  </Link>
                ))}
              </div>

              {/* Language Toggle */}
              <div className="flex items-center gap-4 border-l border-border/60 pl-8">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`text-[10px] uppercase tracking-[0.15em] transition-all ${language === lang
                      ? 'opacity-100 font-bold'
                      : 'opacity-30 hover:opacity-60'
                      }`}
                    aria-label={`Switch to ${lang === 'en' ? 'English' : 'German'}`}
                  >
                    {languageNames[lang]}
                  </button>
                ))}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 reveal del-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              <span
                className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
