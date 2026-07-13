
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Story from '@/components/sections/Story';
import Timeline from '@/components/sections/Timeline';
import RSVPSection from '@/components/sections/RSVPSection';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Story />
      <Timeline />
      <RSVPSection />

      <footer className="py-12 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          <h2 className="font-headline text-3xl">Ruvin & Sasini</h2>
          <p className="text-sm md:text-base font-medium tracking-wide opacity-90">Ruvin - 076 8400 261</p>
          <p className="text-sm md:text-base font-medium tracking-wide opacity-90">Sasini - 077 8776 808</p>
          <p className="text-sm md:text-base font-medium tracking-wide opacity-90">Mino - 075 3396 452</p>
          <div className="pt-8 border-t border-primary-foreground/10 text-xs opacity-50 uppercase tracking-widest">
            Made with love for our friends and family.
          </div>
        </div>
      </footer>
      <Toaster />
    </main>
  );
}
