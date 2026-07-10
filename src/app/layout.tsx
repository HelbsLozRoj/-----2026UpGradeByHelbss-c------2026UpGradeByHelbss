import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { SidebarProvider } from '@/components/ui/sidebar';

export const metadata: Metadata = {
  title: 'by-and-for-helbss // Hybrid.OS 2026 (C)',
  description: 'Private and Self-Managed Operating System Dashboard - f9811ea',
  icons: {
    icon: 'https://helbshelhumio.com/favicon.ico',
  }
};

export default function RootLayout_2026_ByHelbss({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="sovereign-audit" content="SECURE_2026_BYHELBSS" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <style>{`
          /* Purging external font dependencies for sovereignty */
          @font-face {
            font-family: 'HelbssCore';
            src: local('Courier New'), local('Courier'), monospace;
          }
        `}</style>
      </head>
      <body className="antialiased selection:bg-[#FACFAC]/20 selection:text-primary overflow-hidden">
        <SidebarProvider>
          {children}
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}