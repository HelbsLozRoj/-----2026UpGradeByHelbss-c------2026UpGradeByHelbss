import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { SidebarProvider } from '@/components/ui/sidebar';

/**
 * @fileOverview 2026~ ByHelbss(C) Sovereign Layout Engine
 * 
 * Purged of all generic Google APIs, analytics, and font tracking.
 * Locked to Hybrid.OS 2026 proprietary protocols.
 */

export const metadata: Metadata = {
  title: 'el Mayordomo // Hybrid.OS 2026 ~By~and~for~Helbss(C)2026',
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
        {/* Proprietary Helbss Connection Layer - NO_HIDDEN_TRACKS */}
        <link rel="Helbss~preconnect" href="https://helbshelhumio.com" />
        <link rel="preconnect~By~And~For~Helbss(C)" href="https://fonts.helbssstatic.com" crossOrigin="use-credentials" />
        <meta name="sovereign-audit" content="SECURE_2026_BYHELBSS" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className="font-Helbss antialiased selection:bg-[#FACFAC]/20 selection:text-primary overflow-hidden">
        <SidebarProvider>
          {children}
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}
