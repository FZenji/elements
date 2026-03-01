import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { elements, getElementBySlug, getAllSlugs, CATEGORIES } from '@/data/elements';
import ElementClient from '@/components/ElementClient';

interface PageProps {
  params: Promise<{ element: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ element: slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { element: slug } = await params;
  const element = getElementBySlug(slug);
  if (!element) return { title: 'Element Not Found' };

  return {
    title: `${element.name} (${element.symbol}) — Elements`,
    description: `${element.description} Atomic number ${element.number}, mass ${element.mass} u. Explore ${element.name} with interactive 3D atom visualization.`,
    keywords: [element.name, element.symbol, 'element', 'chemistry', 'periodic table', CATEGORIES[element.category].label],
    openGraph: {
      title: `${element.name} (${element.symbol}) — Elements`,
      description: element.description,
      type: 'article',
    },
  };
}

export default async function ElementPage({ params }: PageProps) {
  const { element: slug } = await params;
  const element = getElementBySlug(slug);
  if (!element) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            name: element.name,
            description: element.description,
            about: {
              '@type': 'ChemicalSubstance',
              name: element.name,
              alternateName: element.symbol,
            },
            author: {
              '@type': 'Person',
              name: 'Henry Tolenaar',
            },
          }),
        }}
      />
      <ElementClient element={element} />
    </>
  );
}
