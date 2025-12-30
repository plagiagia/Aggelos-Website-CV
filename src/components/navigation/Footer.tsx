'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/lib/i18n';

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="border-t border-border mt-24 md:mt-32">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column */}
          <div>
            <p className="text-lg mb-2">Aggelos Giannoulis</p>
            <p className="text-muted text-sm max-w-md">
              {t('footer.tagline', language)}
            </p>
          </div>

          {/* Right column */}
          <div className="md:text-right">
            <div className="flex flex-col md:items-end gap-2 text-sm text-muted">
              <p>Thessaloniki, Greece</p>
              <div className="flex gap-4 mt-2">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Behance
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Aggelos Giannoulis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
