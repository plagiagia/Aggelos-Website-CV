'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/lib/i18n';
import { works, Work } from '@/data/works';
import WorkCard from '@/components/works/WorkCard';
import { useEffect, useState } from 'react';

export default function WorksPage() {
  const { language } = useLanguage();
  const [allWorks, setAllWorks] = useState<Work[]>(works);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch uploaded works and combine with static works
    async function loadWorks() {
      try {
        const response = await fetch('/api/admin/works');
        if (response.ok) {
          const data = await response.json();
          setAllWorks([...works, ...data.works]);
        }
      } catch (error) {
        console.error('Error loading uploaded works:', error);
      } finally {
        setLoading(false);
      }
    }
    loadWorks();
  }, []);

  const subtitle = {
    en: 'Paintings, illustrations, and mixed media works',
    de: 'Malereien, Illustrationen und Mixed-Media-Werke',
  };

  if (loading) {
    return (
      <div className="container pt-12 md:pt-16 pb-20 md:pb-32">
        <div className="mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl mb-4">{t('works.title', language)}</h1>
          <p className="text-muted text-lg">{subtitle[language]}</p>
        </div>
        <p className="text-muted">Loading works...</p>
      </div>
    );
  }

  return (
    <div className="container pt-12 md:pt-16 pb-20 md:pb-32">
      {/* Header */}
      <div className="mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl mb-4">{t('works.title', language)}</h1>
        <p className="text-muted text-lg">
          {subtitle[language]}
        </p>
      </div>

      {/* Works Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {allWorks.map((work) => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>
    </div>
  );
}
