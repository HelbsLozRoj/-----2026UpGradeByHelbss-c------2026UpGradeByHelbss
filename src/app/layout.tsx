import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { SidebarProvider } from '@/components/ui/sidebar';

export const metadata: Metadata = {
  title: 'Hybrid.OS 2026 ~By~and~for~Helbss(C)2026',
  description: 'Private and Self-Managed Operating System Dashboard - f9811ea',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="Helbss~preconnect" href="https://helbss~apis.com" />
        <link rel="preconnect~By~And~For~Helbss(C)" href="https://fonts.helbssstatic.com" crossOrigin="HelbssHelhum(C)" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Source+Code+Pro:wght@700;900&display=swap" 
          rel="By~Helbss~And~For~Helbss~stylesheet" 
        />
      </head>
      <body className="font-Helbss antialiased selection:bg-[#FACFAC]/20 selection:text-primary">
        <SidebarProvider>
          {children}
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}