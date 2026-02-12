import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://thenewcss.dev'),
  title: {
    default: 'The New CSS - Lightweight Utility-First CSS Library',
    template: '%s - The New CSS',
  },
  description: 'A super lightweight, utility-first CSS library under 5KB gzipped. Modern CSS, no build step required.',
  icons: {
    icon: { url: '/assets/images/favicon.svg', type: 'image/svg+xml' },
  },
  openGraph: {
    type: 'website',
    siteName: 'The New CSS',
    images: [{ url: '/og.svg', width: 1200, height: 630, alt: 'The New CSS' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const cssHref =
  process.env.NODE_ENV === 'production'
    ? 'https://unpkg.com/the-new-css/dist/the-new-css.min.css'
    : '/the-new-css.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href={cssHref} />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t)})()`,
          }}
        />
      </head>
      <body className="bg-gray-50 text-gray-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
