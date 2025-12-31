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

  return (
    <Link
      href={`/works/${work.slug}`}
      className="group block"
    >
      <article className="space-y-6">
        {/* Image Container */}
        <div className="work-image-container aspect-[3/4] md:aspect-[4/5]">
          <Image
            src={work.thumbnail}
            alt={work.images[0]?.alt ? getLocalizedValue(work.images[0].alt, language) : getLocalizedValue(work.title, language)}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
          />
          <div className="work-image-overlay flex items-center justify-center">
            <span className="text-white text-[10px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
              {language === 'en' ? 'View Details' : 'Details ansehen'}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-2">
          <div className="flex justify-between items-start gap-4">
            <h3 className="text-lg md:text-xl font-serif italic leading-tight">
              {getLocalizedValue(work.title, language)}
            </h3>
            <span className="text-[10px] uppercase tracking-widest text-muted mt-1">{work.year}</span>
          </div>
          <p className="text-xs uppercase tracking-[0.15em] text-muted">
            {work.medium}
          </p>
        </div>
      </article>
    </Link>
  );
}
