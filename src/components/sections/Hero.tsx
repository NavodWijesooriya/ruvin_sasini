
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg?.imageUrl || ''}
          alt="Wedding couple"
          fill
          className="object-cover opacity-60"
          priority
          data-ai-hint="wedding couple"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/40" />
      </div>
      
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <span className="block font-headline text-lg tracking-[0.2em] mb-4 text-primary uppercase">Welcome to our wedding</span>
        <h1 className="font-headline text-6xl md:text-9xl text-primary mb-6">Arthur & Elara</h1>
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
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-16 bg-primary/30" />
      </div>
    </section>
  );
}
