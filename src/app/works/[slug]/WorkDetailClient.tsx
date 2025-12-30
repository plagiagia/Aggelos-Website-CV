'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import { t, getLocalizedValue } from '@/lib/i18n';
import type { Work } from '@/data/works';

const metadataLabels: Record<string, { en: string; de: string }> = {
  year: { en: 'Year', de: 'Jahr' },
  medium: { en: 'Medium', de: 'Medium' },
  dimensions: { en: 'Dimensions', de: 'Maße' },
  series: { en: 'Series', de: 'Serie' },
  exhibition: { en: 'Exhibition', de: 'Ausstellung' },
  availability: { en: 'Availability', de: 'Verfügbarkeit' },
  status: { en: 'Status', de: 'Status' },
  notes: { en: 'Notes', de: 'Notizen' },
  usage: { en: 'Usage', de: 'Verwendung' },
};

interface Props {
  work: Work;
}

export default function WorkDetailClient({ work }: Props) {
  const { language } = useLanguage();

  const allMetadata = [
    { key: 'year', value: { en: work.year, de: work.year } },
    { key: 'medium', value: { en: work.medium, de: work.medium } },
    { key: 'dimensions', value: { en: work.dimensions, de: work.dimensions } },
    ...work.metadata,
  ];

  return (
    <div className="container pt-12 md:pt-16 pb-20 md:pb-32">
      {/* Back link */}
      <Link
        href="/works"
        className="inline-block text-sm text-muted hover:text-foreground transition-colors mb-8 md:mb-12"
      >
        ← {t('works.backToWorks', language)}
      </Link>

      {/* Work Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden bg-border">
          <Image
            src={work.images[0]?.src || work.thumbnail}
            alt={work.images[0]?.alt ? getLocalizedValue(work.images[0].alt, language) : getLocalizedValue(work.title, language)}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Info */}
        <div>
          <h1 className="text-3xl md:text-4xl mb-6">
            {getLocalizedValue(work.title, language)}
          </h1>

          {/* Metadata */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {allMetadata.map((item) => {
              const label = metadataLabels[item.key];
              if (!label) return null;
              return (
                <div key={item.key}>
                  <p className="label mb-1">{getLocalizedValue(label, language)}</p>
                  <p className="text-sm">
                    {typeof item.value === 'string'
                      ? item.value
                      : getLocalizedValue(item.value, language)}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Description */}
          <div className="prose mb-8">
            <p className="text-muted">
              {getLocalizedValue(work.longDescription, language)}
            </p>
          </div>

          {/* Inquire Button */}
          <Link
            href="/contact"
            className="inline-block border border-foreground px-6 py-3 text-sm hover:bg-foreground hover:text-background transition-colors"
          >
            {t('works.inquire', language)}
          </Link>
        </div>
      </div>

      {/* Additional Images */}
      {work.images.length > 1 && (
        <div className="mt-16 md:mt-24">
          <h2 className="text-xl mb-8">
            {language === 'en' ? 'Additional Views' : 'Weitere Ansichten'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {work.images.slice(1).map((image, index) => (
              <div key={index} className="relative aspect-[4/3] overflow-hidden bg-border">
                <Image
                  src={image.src}
                  alt={getLocalizedValue(image.alt, language)}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
