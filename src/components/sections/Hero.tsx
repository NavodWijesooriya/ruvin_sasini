
"use client";

import Image from 'next/image';
import heroBg from '@/assets/images/DSC_0823.jpg.jpeg';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Layer with Couple Photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt="Ruvin and Sasini wedding invitation inspiration"
          fill
          className="object-cover"
          priority
          data-ai-hint="romantic couple"
        />
        {/* Enhanced overlay for text readability - darker at bottom for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-black/30" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center text-center pt-20">
        <div className="animate-fade-in-up max-w-4xl">
          <span className="block font-headline text-lg tracking-[0.3em] mb-6 text-white uppercase drop-shadow-md">
            Save the date for the wedding of
          </span>
          <h1 className="font-headline text-7xl md:text-9xl text-white mb-8 leading-tight drop-shadow-lg">
            Ruvin & Sasini
          </h1>
          <div className="w-24 h-[1px] bg-white/50 mx-auto mb-8" />
          <p className="font-headline italic text-2xl md:text-4xl text-white/90 mb-12 drop-shadow-md">
            {/* Thursday, August 6, 2026 • St. Joseph's Church, Walikada */}
          </p>
          <a
            href="#rsvp"
            className="inline-block bg-accent text-accent-foreground px-12 py-5 font-headline text-xl rounded-full hover:scale-105 transition-transform shadow-2xl backdrop-blur-sm"
          >
            View Details
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 z-20">
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-white/30" />
      </div>
    </section>
  );
}
