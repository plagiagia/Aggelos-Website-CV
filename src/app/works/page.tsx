'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/lib/i18n';
import { works } from '@/data/works';
import WorkCard from '@/components/works/WorkCard';

export default function WorksPage() {
  const { language } = useLanguage();

  return (
    <div className="container pt-12 md:pt-16 pb-20 md:pb-32">
      {/* Header */}
      <div className="mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl mb-4">{t('works.title', language)}</h1>
        <p className="text-muted text-lg">
          {language === 'en'
            ? 'Paintings, illustrations, and mixed media works'
            : 'Malereien, Illustrationen und Mixed-Media-Werke'}
        </p>
      </div>

      {/* Works Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {works.map((work) => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>
    </div>
  );
}
