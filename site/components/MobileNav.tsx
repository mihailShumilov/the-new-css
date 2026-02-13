'use client';

import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden flex items-center gap-2">
      <ThemeToggle />
      <button
        className="p-3 -mr-2 rounded-lg"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-nav-menu"
        onClick={() => setOpen(!open)}
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          {open ? (
            <path d="M6 6l12 12M6 18L18 6" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      {open && (
        <nav
          id="mobile-nav-menu"
          className="absolute top-full left-0 right-0 bg-gray-50 border-b border-gray-200 shadow-lg z-40"
          aria-label="Mobile navigation"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            <a href="/docs" className="block py-3 px-2 text-gray-600 rounded-lg hover:bg-gray-100">Docs</a>
            <a href="/examples" className="block py-3 px-2 text-gray-600 rounded-lg hover:bg-gray-100">Examples</a>
            <a href="/templates" className="block py-3 px-2 text-gray-600 rounded-lg hover:bg-gray-100">Templates</a>
            <a href="/blog" className="block py-3 px-2 text-gray-600 rounded-lg hover:bg-gray-100">Blog</a>
            <a href="/compare" className="block py-3 px-2 text-gray-600 rounded-lg hover:bg-gray-100">Compare</a>
            <a href="/faq" className="block py-3 px-2 text-gray-600 rounded-lg hover:bg-gray-100">FAQ</a>
            <a href="https://github.com/mihailShumilov/the-new-css" className="block py-3 px-2 text-gray-600 rounded-lg hover:bg-gray-100">GitHub</a>
          </div>
        </nav>
      )}
    </div>
  );
}
