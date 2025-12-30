'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import { getLocalizedValue } from '@/lib/i18n';
import { Work } from '@/data/works';

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
      <article>
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden bg-border mb-4">
          <Image
            src={work.thumbnail}
            alt={work.images[0]?.alt ? getLocalizedValue(work.images[0].alt, language) : getLocalizedValue(work.title, language)}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Info */}
        <div className="space-y-1">
          <h3 className="text-base font-normal">
            {getLocalizedValue(work.title, language)}
          </h3>
          <p className="text-sm text-muted">
            {work.year} · {work.medium}
          </p>
        </div>
      </article>
    </Link>
  );
}
