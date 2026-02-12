import type { Metadata } from 'next';

const SITE_URL = 'https://thenewcss.com';
const SITE_NAME = 'The New CSS';
const OG_IMAGE = `${SITE_URL}/og.svg`;

export function docMeta(opts: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${SITE_URL}${opts.path}`;
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: `${opts.title} - ${SITE_NAME}`,
      description: opts.description,
      url,
      siteName: SITE_NAME,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${opts.title} - ${SITE_NAME}`,
      description: opts.description,
      images: [OG_IMAGE],
    },
  };
}

export function techArticleJsonLd(opts: {
  headline: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: opts.headline,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    inLanguage: 'en',
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export { SITE_URL, SITE_NAME, OG_IMAGE };
