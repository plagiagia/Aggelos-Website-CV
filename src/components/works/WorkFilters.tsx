'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { getLocalizedValue } from '@/lib/i18n';
import type { Work } from '@/data/works';

interface WorkFiltersProps {
  works: Work[];
  onFilterChange: (filteredWorks: Work[]) => void;
}

export default function WorkFilters({ works, onFilterChange }: WorkFiltersProps) {
  const { language } = useLanguage();
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedMedium, setSelectedMedium] = useState<string>('all');
  const [selectedSeries, setSelectedSeries] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'title'>('newest');

  // Get unique values for filters
  const years = Array.from(new Set(works.map(w => w.year))).sort((a, b) => b.localeCompare(a));
  const mediums = Array.from(new Set(works.map(w => w.medium)));
  const series = Array.from(new Set(
    works.flatMap(w => 
      w.metadata
        .filter(m => m.key === 'series')
        .map(m => getLocalizedValue(m.value, language))
    )
  ));

  useEffect(() => {
    let filtered = [...works];

    // Apply filters
    if (selectedYear !== 'all') {
      filtered = filtered.filter(w => w.year === selectedYear);
    }
    if (selectedMedium !== 'all') {
      filtered = filtered.filter(w => w.medium === selectedMedium);
    }
    if (selectedSeries !== 'all') {
      filtered = filtered.filter(w => 
        w.metadata.some(m => 
          m.key === 'series' && getLocalizedValue(m.value, language) === selectedSeries
        )
      );
    }

    // Apply search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(w => 
        getLocalizedValue(w.title, language).toLowerCase().includes(query) ||
        getLocalizedValue(w.shortDescription, language).toLowerCase().includes(query) ||
        getLocalizedValue(w.longDescription, language).toLowerCase().includes(query)
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return b.year.localeCompare(a.year);
        case 'oldest':
          return a.year.localeCompare(b.year);
        case 'title':
          return getLocalizedValue(a.title, language).localeCompare(
            getLocalizedValue(b.title, language)
          );
        default:
          return 0;
      }
    });

    onFilterChange(filtered);
  }, [selectedYear, selectedMedium, selectedSeries, searchQuery, sortBy, works, language, onFilterChange]);

  const labels = {
    filterBy: {
      en: 'Filter by',
      de: 'Filtern nach',
    },
    year: {
      en: 'Year',
      de: 'Jahr',
    },
    medium: {
      en: 'Medium',
      de: 'Medium',
    },
    series: {
      en: 'Series',
      de: 'Serie',
    },
    search: {
      en: 'Search works...',
      de: 'Werke durchsuchen...',
    },
    sortBy: {
      en: 'Sort by',
      de: 'Sortieren nach',
    },
    newest: {
      en: 'Newest',
      de: 'Neueste',
    },
    oldest: {
      en: 'Oldest',
      de: 'Älteste',
    },
    title: {
      en: 'Title',
      de: 'Titel',
    },
    all: {
      en: 'All',
      de: 'Alle',
    },
  };

  return (
    <div className="mb-12 space-y-6">
      {/* Search */}
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={labels.search[language]}
          className="w-full bg-transparent border-b border-border/60 py-3 px-0 focus:outline-none focus:border-accent transition-all text-sm"
          aria-label={labels.search[language]}
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 items-center">
        <span className="label opacity-60">{labels.filterBy[language]}:</span>
        
        {/* Year Filter */}
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="bg-transparent border border-border/40 px-4 py-2 text-sm focus:outline-none focus:border-accent transition-all cursor-pointer"
          aria-label={labels.year[language]}
        >
          <option value="all">{labels.all[language]} {labels.year[language]}</option>
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>

        {/* Medium Filter */}
        <select
          value={selectedMedium}
          onChange={(e) => setSelectedMedium(e.target.value)}
          className="bg-transparent border border-border/40 px-4 py-2 text-sm focus:outline-none focus:border-accent transition-all cursor-pointer"
          aria-label={labels.medium[language]}
        >
          <option value="all">{labels.all[language]} {labels.medium[language]}</option>
          {mediums.map(medium => (
            <option key={medium} value={medium}>{medium}</option>
          ))}
        </select>

        {/* Series Filter */}
        {series.length > 0 && (
          <select
            value={selectedSeries}
            onChange={(e) => setSelectedSeries(e.target.value)}
            className="bg-transparent border border-border/40 px-4 py-2 text-sm focus:outline-none focus:border-accent transition-all cursor-pointer"
            aria-label={labels.series[language]}
          >
            <option value="all">{labels.all[language]} {labels.series[language]}</option>
            {series.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        )}

        {/* Sort */}
        <div className="ml-auto flex items-center gap-2">
          <span className="label opacity-60">{labels.sortBy[language]}:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest' | 'title')}
            className="bg-transparent border border-border/40 px-4 py-2 text-sm focus:outline-none focus:border-accent transition-all cursor-pointer"
            aria-label={labels.sortBy[language]}
          >
            <option value="newest">{labels.newest[language]}</option>
            <option value="oldest">{labels.oldest[language]}</option>
            <option value="title">{labels.title[language]}</option>
          </select>
        </div>
      </div>
    </div>
  );
}
