import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AWS Migration Guide | Plan, Execute, Operate',
  description: 'End-to-end AWS migration steps with interactive checklists, patterns, governance, and cutover planning. Built for practical delivery at scale.',
  metadataBase: new URL('https://agentic-f69ecf1f.vercel.app'),
  openGraph: {
    title: 'AWS Migration Guide',
    description: 'Interactive steps and checklists for AWS migrations',
    url: 'https://agentic-f69ecf1f.vercel.app',
    siteName: 'AWS Migration Guide',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
}
