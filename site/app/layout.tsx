import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://thenewcss.com'),
  title: {
    default: 'The New CSS - Modern CSS. Clean by default.',
    template: '%s - The New CSS',
  },
  description: 'A lightweight, zero-config CSS base built for readable HTML and fast adoption. Sensible defaults, no build step, under 5KB gzipped.',
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
        <meta name="theme-color" content="#f9fafb" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#111827" media="(prefers-color-scheme: dark)" />
        <link rel="preconnect" href="https://unpkg.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://unpkg.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="stylesheet" href={cssHref} />
        <link rel="alternate" type="application/rss+xml" title="The New CSS Blog" href="/rss.xml" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t)})()`,
          }}
        />
      </head>
      <body className="bg-gray-50 text-gray-900">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NRX9LRG31V"
          strategy="lazyOnload"
        />
        <Script id="gtag-init" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-NRX9LRG31V');
document.addEventListener('click', function(e) {
  var el = e.target.closest('[data-event]');
  if (el) gtag('event', el.getAttribute('data-event'));
});`}
        </Script>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
