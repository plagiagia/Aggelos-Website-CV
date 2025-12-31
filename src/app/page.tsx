'use client';

import WorkCard from '@/components/works/WorkCard';
import { works } from '@/data/works';
import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/lib/i18n';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const { language } = useLanguage();
  const featuredWorks = works.slice(0, 4);

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="container min-h-[85vh] flex flex-col justify-center pt-32 pb-20">
        <div className="max-w-4xl">
          <p className="label mb-6 reveal">{t('home.subtitle', language)}</p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl mb-8 reveal del-1 leading-[0.9]">
            Aggelos <br className="hidden md:block" /> Giannoulis
          </h1>
          <div className="flex flex-col md:flex-row md:items-end gap-8 mb-12 reveal del-2">
            <p className="text-2xl md:text-3xl font-serif text-muted italic">Άγγελος Γιαννούλης</p>
            <p className="text-xl md:text-2xl text-muted/80 max-w-xl leading-relaxed">
              {t('home.tagline', language)}
            </p>
          </div>
          <div className="reveal del-3">
            <Link href="/works" className="group flex items-center gap-4 text-sm uppercase tracking-[0.3em]">
              <span className="border-b border-foreground/30 pb-1 group-hover:border-foreground transition-all">
                {t('home.viewAll', language)}
              </span>
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Image (Full Width) */}
      <section className="mb-32 reveal del-3">
        <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-card/50">
          <Image
            src="/images/works/painting-1.png"
            alt="Featured artwork by Aggelos Giannoulis"
            fill
            className="object-cover scale-105 hover:scale-100 transition-transform duration-[3s]"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-12 left-12 md:left-24 text-white overflow-hidden">
            <p className="label text-white/70 mb-2 translate-y-full animate-reveal">Current Work</p>
            <h2 className="text-3xl md:text-5xl font-serif translate-y-full animate-reveal del-1">Urban Reverie, 2023</h2>
          </div>
        </div>
      </section>

      {/* Selected Works Grid */}
      <section className="container pb-40">
        <div className="flex items-baseline justify-between mb-16 md:mb-24 reveal">
          <h2 className="text-3xl md:text-5xl font-serif italic">{t('home.selectedWorks', language)}</h2>
          <Link
            href="/works"
            className="text-xs uppercase tracking-[0.2em] opacity-40 hover:opacity-100 transition-opacity"
          >
            {t('home.viewAll', language)}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {featuredWorks.map((work, index) => (
            <div key={work.id} className={`reveal del-${(index % 3) + 1}`}>
              <WorkCard work={work} />
            </div>
          ))}
        </div>
      </section>

      {/* Statement Section */}
      <section className="container pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 reveal">
            <h2 className="text-4xl md:text-6xl font-serif mb-12 italic leading-tight">
              {t('about.statementTitle', language)}
            </h2>
          </div>
          <div className="lg:col-span-7 reveal del-1">
            <div className="prose mb-12">
              {t('home.statement', language).split('\n').map((para, i) => (
                <p key={i} className="mb-8">{para}</p>
              ))}
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.2em] group"
            >
              <span className="border-b border-foreground/10 group-hover:border-foreground/50 pb-1 transition-all">
                {t('home.readMore', language)}
              </span>
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container pb-32">
        <div className="border-t border-border/40 pt-24 md:pt-32">
          <div className="max-w-4xl mx-auto text-center reveal">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-12 italic leading-[1]">
              {t('contact.title', language)}
            </h2>
            <Link
              href="/contact"
              className="inline-flex h-20 items-center px-12 border border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background transition-all text-xs uppercase tracking-[0.3em]"
            >
              {language === 'en' ? 'Inquire' : 'Anfragen'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
