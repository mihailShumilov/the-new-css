import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'Dashboard template',
  description: 'A ready-to-use dashboard template built with The New CSS. Navigation, stats cards, and data table.',
  alternates: { canonical: 'https://thenewcss.com/templates/dashboard' },
};

const templateCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard</title>
  <link rel="stylesheet" href="https://unpkg.com/the-new-css/dist/the-new-css.min.css">
</head>
<body class="bg-gray-50 text-gray-900">

  <!-- Top Nav -->
  <header class="bg-gray-900 text-white">
    <nav class="container mx-auto flex items-center
      justify-between px-4 py-3">
      <span class="font-bold text-lg">Dashboard</span>
      <div class="flex items-center gap-4 text-sm">
        <a href="#" class="text-gray-300 hover:text-white">Settings</a>
        <a href="#" class="text-gray-300 hover:text-white">Profile</a>
      </div>
    </nav>
  </header>

  <div class="container mx-auto px-4 py-8">

    <!-- Stats Cards -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div class="p-4 bg-gray-100 rounded-lg border
        border-gray-200">
        <p class="text-sm text-gray-500">Users</p>
        <p class="text-2xl font-bold">1,234</p>
      </div>
      <div class="p-4 bg-gray-100 rounded-lg border
        border-gray-200">
        <p class="text-sm text-gray-500">Revenue</p>
        <p class="text-2xl font-bold">$12,340</p>
      </div>
      <div class="p-4 bg-gray-100 rounded-lg border
        border-gray-200">
        <p class="text-sm text-gray-500">Orders</p>
        <p class="text-2xl font-bold">567</p>
      </div>
      <div class="p-4 bg-gray-100 rounded-lg border
        border-gray-200">
        <p class="text-sm text-gray-500">Conversion</p>
        <p class="text-2xl font-bold">3.2%</p>
      </div>
    </div>

    <!-- Data Table -->
    <div class="bg-gray-100 rounded-lg border border-gray-200
      overflow-hidden">
      <div class="px-4 py-3 border-b border-gray-200">
        <h2 class="font-semibold">Recent orders</h2>
      </div>
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-gray-200 bg-gray-50">
            <th class="text-left px-4 py-2">Order</th>
            <th class="text-left px-4 py-2">Customer</th>
            <th class="text-left px-4 py-2">Amount</th>
            <th class="text-left px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-gray-200">
            <td class="px-4 py-2">#1001</td>
            <td class="px-4 py-2">Alice</td>
            <td class="px-4 py-2">$120</td>
            <td class="px-4 py-2 text-green-600">Paid</td>
          </tr>
          <tr class="border-b border-gray-200">
            <td class="px-4 py-2">#1002</td>
            <td class="px-4 py-2">Bob</td>
            <td class="px-4 py-2">$85</td>
            <td class="px-4 py-2 text-yellow-600">Pending</td>
          </tr>
          <tr>
            <td class="px-4 py-2">#1003</td>
            <td class="px-4 py-2">Carol</td>
            <td class="px-4 py-2">$210</td>
            <td class="px-4 py-2 text-green-600">Paid</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</body>
</html>`;

export default function DashboardTemplatePage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-sm text-gray-500 mb-2"><a href="/templates" className="hover:text-blue-600">&larr; All templates</a></p>
          <h1 className="text-3xl font-extrabold tracking-tight mb-4">Dashboard template</h1>
          <p className="text-gray-600">Navigation + cards + tables. This is plain HTML + The New CSS.</p>
        </div>

        {/* Live Preview */}
        <div className="border border-gray-200 rounded-lg overflow-hidden mb-8">
          <div className="px-4 py-2 bg-gray-100 border-b border-gray-200 text-sm font-medium text-gray-500">Preview</div>
          <div className="bg-gray-50">
            <header className="bg-gray-900 text-white">
              <nav className="container mx-auto flex items-center justify-between px-4 py-3">
                <span className="font-bold text-lg">Dashboard</span>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-gray-300">Settings</span>
                  <span className="text-gray-300">Profile</span>
                </div>
              </nav>
            </header>
            <div className="container mx-auto px-4 py-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="p-4 bg-gray-100 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-500">Users</p>
                  <p className="text-2xl font-bold">1,234</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-500">Revenue</p>
                  <p className="text-2xl font-bold">$12,340</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-500">Orders</p>
                  <p className="text-2xl font-bold">567</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-500">Conversion</p>
                  <p className="text-2xl font-bold">3.2%</p>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg border border-gray-200 overflow-hidden">
                <div className="px-4 py-3 border-b border-gray-200">
                  <h3 className="font-semibold">Recent orders</h3>
                </div>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="text-left px-4 py-2">Order</th>
                      <th className="text-left px-4 py-2">Customer</th>
                      <th className="text-left px-4 py-2">Amount</th>
                      <th className="text-left px-4 py-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-2">#1001</td>
                      <td className="px-4 py-2">Alice</td>
                      <td className="px-4 py-2">$120</td>
                      <td className="px-4 py-2 text-green-600">Paid</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-2">#1002</td>
                      <td className="px-4 py-2">Bob</td>
                      <td className="px-4 py-2">$85</td>
                      <td className="px-4 py-2 text-yellow-600">Pending</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">#1003</td>
                      <td className="px-4 py-2">Carol</td>
                      <td className="px-4 py-2">$210</td>
                      <td className="px-4 py-2 text-green-600">Paid</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-4">Source code</h2>
          <CodeBlock code={templateCode}>{templateCode}</CodeBlock>
        </div>
      </div>
    </div>
  );
}
