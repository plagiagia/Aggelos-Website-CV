import { notFound } from 'next/navigation';
import { works, getWorkBySlug } from '@/data/works';
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

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    notFound();
  }

  return <WorkDetailClient work={work} />;
}
