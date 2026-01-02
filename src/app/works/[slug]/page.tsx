import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { works, getWorkBySlug } from '@/data/works';
import { getWorkBySlugCombined } from '@/data/works-server';
import WorkDetailClient from './WorkDetailClient';

// Generate static params for all works at build time
export function generateStaticParams() {
  return works.map((work) => ({
    slug: work.slug,
  }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = await getWorkBySlugCombined(slug, works);

  if (!work) {
    return {
      title: 'Work Not Found',
    };
  }

  const title = `${work.title.en} (${work.year}) | Aggelos Giannoulis`;
  const description = work.shortDescription.en;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aggelosgiannoulis.com';
  const imageUrl = `${baseUrl}${work.images[0]?.src || work.thumbnail}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: work.images[0]?.alt?.en || work.title.en,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const work = await getWorkBySlugCombined(slug, works);

  if (!work) {
    notFound();
  }

  // Structured data for SEO
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aggelosgiannoulis.com';
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'VisualArtwork',
    name: work.title.en,
    creator: {
      '@type': 'Person',
      name: 'Aggelos Giannoulis',
      alternateName: 'Άγγελος Γιαννούλης',
    },
    dateCreated: work.year,
    artMedium: work.medium,
    artform: 'Painting',
    description: work.longDescription.en,
    image: `${baseUrl}${work.images[0]?.src || work.thumbnail}`,
    url: `${baseUrl}/works/${work.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <WorkDetailClient work={work} />
    </>
  );
}
