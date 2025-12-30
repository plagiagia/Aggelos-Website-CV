'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/lib/i18n';
import { works } from '@/data/works';
import WorkCard from '@/components/works/WorkCard';

export default function Home() {
  const { language } = useLanguage();
  const featuredWorks = works.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="container pt-16 md:pt-24 pb-20 md:pb-32">
        <div className="max-w-3xl">
          <p className="label mb-4">{t('home.subtitle', language)}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4">
            Aggelos Giannoulis
          </h1>
          <p className="text-xl md:text-2xl text-muted mb-6">Άγγελος Γιαννούλης</p>
          <p className="text-lg md:text-xl text-muted max-w-2xl">
            {t('home.tagline', language)}
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container pb-20 md:pb-32">
        <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-border">
          <Image
            src="/images/placeholder.svg"
            alt="Featured artwork by Aggelos Giannoulis"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Selected Works */}
      <section className="container pb-20 md:pb-32">
        <div className="flex items-baseline justify-between mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl">{t('home.selectedWorks', language)}</h2>
          <Link
            href="/works"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            {t('home.viewAll', language)} →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredWorks.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </section>

      {/* Statement */}
      <section className="container pb-20 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="text-2xl md:text-3xl mb-6">
              {t('about.statementTitle', language)}
            </h2>
          </div>
          <div>
            <p className="text-lg text-muted mb-6 prose">
              {t('home.statement', language)}
            </p>
            <Link
              href="/about"
              className="text-sm hover:opacity-70 transition-opacity"
            >
              {t('home.readMore', language)} →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container pb-20 md:pb-32">
        <div className="border-t border-border pt-12 md:pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl mb-4">
                {t('contact.title', language)}
              </h2>
              <p className="text-muted">
                {t('contact.subtitle', language)}
              </p>
            </div>
            <div className="md:text-right">
              <Link
                href="/contact"
                className="inline-block border border-foreground px-6 py-3 text-sm hover:bg-foreground hover:text-background transition-colors"
              >
                {language === 'en' ? 'Get in Touch' : 'Kontakt aufnehmen'} →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
