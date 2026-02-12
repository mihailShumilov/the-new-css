'use client';

import { usePathname } from 'next/navigation';
import { docsNav } from '@/lib/docs-nav';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="md:sticky top-0 w-full md:w-1/4 shrink-0">
      <nav className="space-y-1 text-sm">
        {docsNav.map((section) => (
          <div key={section.title}>
            <p className="font-semibold text-gray-900 mt-4 first:mt-0 mb-2">{section.title}</p>
            {section.items.map((item) => {
              const active = pathname === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={
                    active
                      ? 'block py-1 text-blue-600 font-medium'
                      : 'block py-1 text-gray-600 hover:text-blue-600'
                  }
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        ))}
      </nav>
    </aside>
  );
}
