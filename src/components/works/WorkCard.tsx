'use client';

import { Work } from '@/data/works';
import { useLanguage } from '@/lib/LanguageContext';
import { getLocalizedValue } from '@/lib/i18n';
import Image from 'next/image';
import Link from 'next/link';

interface WorkCardProps {
  work: Work;
}

export default function WorkCard({ work }: WorkCardProps) {
  const { language } = useLanguage();

  const title = getLocalizedValue(work.title, language);
  const altText = work.images[0]?.alt ? getLocalizedValue(work.images[0].alt, language) : title;

  return (
    <Link
      href={`/works/${work.slug}`}
      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
      aria-label={`View details for ${title}, ${work.year}`}
    >
      <article className="space-y-6">
        {/* Image Container */}
        <div className="work-image-container aspect-[3/4] md:aspect-[4/5]">
          <Image
            src={work.thumbnail}
            alt={altText}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
            loading="lazy"
          />
          <div className="work-image-overlay flex items-center justify-center" aria-hidden="true">
            <span className="text-white text-[10px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
              {language === 'en' ? 'View Details' : language === 'de' ? 'Details ansehen' : 'Λεπτομέρειες'}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-2">
          <div className="flex justify-between items-start gap-4">
            <h3 className="text-lg md:text-xl font-serif italic leading-tight">
              {title}
            </h3>
            <time className="text-[10px] uppercase tracking-widest text-muted mt-1" dateTime={work.year}>
              {work.year}
            </time>
          </div>
          <p className="text-xs uppercase tracking-[0.15em] text-muted">
            {work.medium}
          </p>
        </div>
      </article>
    </Link>
  );
}
