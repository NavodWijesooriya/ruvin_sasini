
"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const bgImg = PlaceHolderImages.find(img => img.id === 'hero-bg');
  const coupleImg = PlaceHolderImages.find(img => img.id === 'hero-couple');

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImg?.imageUrl || ''}
          alt="Blue background"
          fill
          className="object-cover opacity-30"
          priority
          data-ai-hint="blue background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
      </div>
      
      <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col lg:flex-row items-center justify-between gap-12 pt-20">
        {/* Text Content */}
        <div className="text-center lg:text-left flex-1 animate-fade-in-left">
          <span className="block font-headline text-lg tracking-[0.2em] mb-4 text-primary uppercase">Welcome to our wedding</span>
          <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl text-primary mb-6 leading-tight">Arthur & Elara</h1>
          <p className="font-headline italic text-2xl md:text-3xl text-foreground/80 mb-12">
            October 12th, 2025 • Tuscany, Italy
          </p>
          <a 
            href="#rsvp" 
            className="inline-block bg-accent text-accent-foreground px-10 py-4 font-headline text-lg rounded-full hover:scale-105 transition-transform shadow-lg"
          >
            Reserve Your Seat
          </a>
        </div>

        {/* Couple Photo Container */}
        <div className="relative flex-1 max-w-md lg:max-w-lg w-full animate-fade-in-right">
          <div className="absolute -inset-4 bg-accent/5 rounded-[3rem] -rotate-3 blur-2xl" />
          <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border-8 border-background shadow-2xl transform rotate-2">
            <Image
              src={coupleImg?.imageUrl || ''}
              alt="Arthur and Elara"
              fill
              className="object-cover"
              data-ai-hint="wedding couple"
              priority
            />
          </div>
          {/* Decorative floating elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.4em] text-primary/40 font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-primary/20" />
      </div>
    </section>
  );
}
