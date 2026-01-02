'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/lib/i18n';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navItems = [
    { href: '/works', label: 'nav.works' },
    { href: '/about', label: 'nav.about' },
    { href: '/contact', label: 'nav.contact' },
  ];

  const languages = [
    { code: 'en' as const, name: 'EN' },
    { code: 'de' as const, name: 'DE' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  if (!mounted) return null;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-40 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Menu */}
      <div
        className={`fixed top-20 left-0 right-0 bottom-0 bg-background z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
        aria-label="Mobile navigation menu"
      >
        <nav className="container pt-12">
          <div className="flex flex-col gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`text-2xl font-serif italic transition-all ${
                  isActive(item.href)
                    ? 'opacity-100 border-b-2 border-accent pb-2'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                {t(item.label, language)}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="pt-8 border-t border-border/40">
              <p className="label mb-4 opacity-40">Language</p>
              <div className="flex gap-6">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      onClose();
                    }}
                    className={`text-sm uppercase tracking-widest transition-all ${
                      language === lang.code
                        ? 'opacity-100 font-bold'
                        : 'opacity-40 hover:opacity-70'
                    }`}
                    aria-label={`Switch to ${lang.name === 'EN' ? 'English' : 'German'}`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
