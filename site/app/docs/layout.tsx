import Sidebar from '@/components/Sidebar';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      <Sidebar />
      <main className="flex-1 min-w-0 max-w-prose">{children}</main>
    </div>
  );
}
