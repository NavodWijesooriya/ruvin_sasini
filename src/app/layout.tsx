import type { Metadata } from 'next';
import './globals.css';
import LoadingScreen from '@/components/layout/LoadingScreen';
import FloatingHearts from '@/components/ui/floating-hearts';

export const metadata: Metadata = {
  title: 'Ruwin & Sasini | Wedding Invitation',
  description: 'A hand-painted save-the-date for Ruwin and Sasini, with church ceremony details, travel context, and RSVP information.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground relative">
        <LoadingScreen />
        <FloatingHearts />
        {children}
      </body>
    </html>
  );
}
