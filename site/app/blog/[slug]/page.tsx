import type { Metadata } from 'next';
import { blogPosts, getPost, getAllSlugs } from '@/lib/blog-posts';
import { SITE_URL, SITE_NAME, OG_IMAGE } from '@/lib/seo';

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: 'Not Found' };

  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: `${post.title} | ${SITE_NAME}`,
      description: post.description,
      url,
      siteName: SITE_NAME,
      publishedTime: post.date,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | ${SITE_NAME}`,
      description: post.description,
      images: [OG_IMAGE],
    },
  };
}

function renderMarkdown(content: string) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeLines: string[] = [];
  let key = 0;

  for (const line of lines) {
    if (line.startsWith('```')) {
      if (inCodeBlock) {
        elements.push(
          <pre key={key++} className="code-block my-4">
            <code>{codeLines.join('\n')}</code>
          </pre>
        );
        codeLines = [];
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      continue;
    }

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={key++} className="text-xl font-bold mt-8 mb-3">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={key++} className="text-lg font-semibold mt-6 mb-2">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith('- ')) {
      elements.push(
        <li key={key++} className="ml-4 text-gray-700">
          {renderInline(line.slice(2))}
        </li>
      );
    } else if (line.trim() === '') {
      // skip empty lines
    } else {
      elements.push(
        <p key={key++} className="text-gray-700 leading-relaxed mb-4">
          {renderInline(line)}
        </p>
      );
    }
  }

  return elements;
}

function renderInline(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    // Links: [text](url)
    const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);
    // Inline code: `code`
    const codeMatch = remaining.match(/`([^`]+)`/);
    // Bold: **text**
    const boldMatch = remaining.match(/\*\*([^*]+)\*\*/);

    const matches = [
      linkMatch && { type: 'link', match: linkMatch },
      codeMatch && { type: 'code', match: codeMatch },
      boldMatch && { type: 'bold', match: boldMatch },
    ]
      .filter(Boolean)
      .sort((a, b) => (a!.match!.index ?? 0) - (b!.match!.index ?? 0));

    if (matches.length === 0) {
      parts.push(remaining);
      break;
    }

    const first = matches[0]!;
    const idx = first.match!.index!;

    if (idx > 0) {
      parts.push(remaining.slice(0, idx));
    }

    if (first.type === 'link') {
      parts.push(
        <a key={key++} href={first.match![2]} className="text-blue-600 underline hover:no-underline">
          {first.match![1]}
        </a>
      );
    } else if (first.type === 'code') {
      parts.push(
        <code key={key++} className="text-sm bg-gray-100 px-1 rounded">
          {first.match![1]}
        </code>
      );
    } else if (first.type === 'bold') {
      parts.push(<strong key={key++}>{first.match![1]}</strong>);
    }

    remaining = remaining.slice(idx + first.match![0].length);
  }

  return parts;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-2xl font-bold">Post not found</h1>
      </div>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url: `${SITE_URL}/blog/${post.slug}`,
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <p className="text-sm text-gray-500 mb-2">
            <a href="/blog" className="hover:text-blue-600">&larr; Blog</a>
            <span className="mx-2">/</span>
            {post.date}
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
            {post.title}
          </h1>
          <div className="blog-content">
            {renderMarkdown(post.content)}
          </div>

          {/* CTA */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200 text-center">
            <h3 className="text-lg font-bold mb-2">Try The New CSS</h3>
            <p className="text-gray-600 text-sm mb-4">
              A lightweight, zero-config CSS library for modern websites.
            </p>
            <a
              href="/#quickstart"
              className="inline-flex items-center px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              Get started
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
