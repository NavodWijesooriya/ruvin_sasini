
import Image from 'next/image';
import { MapPin, Plane, Car, Hotel } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ScrollReveal from '@/components/ui/scroll-reveal';

export default function Location() {
  const venueImg = PlaceHolderImages.find(img => img.id === 'venue');

  return (
    <section id="location" className="py-24 px-6 md:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <ScrollReveal animation="animate-fade-in-left">
              <div>
                <h2 className="font-headline text-4xl md:text-6xl text-primary mb-6">The Venue</h2>
                <p className="text-xl text-muted-foreground flex items-start gap-2">
                  <MapPin className="w-6 h-6 text-accent shrink-0 mt-1" />
                  Villa di Maiano, Florence, Italy
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <ScrollReveal animation="animate-fade-in-up" delay="0.1s">
                <div className="space-y-4">
                  <Plane className="w-8 h-8 text-accent stroke-[1px]" />
                  <h3 className="font-headline text-2xl text-primary">Travel</h3>
                  <p className="text-muted-foreground">The nearest airport is Florence Peretola (FLR). Shuttles will be provided for those staying in the city center.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="animate-fade-in-up" delay="0.2s">
                <div className="space-y-4">
                  <Hotel className="w-8 h-8 text-accent stroke-[1px]" />
                  <h3 className="font-headline text-2xl text-primary">Stay</h3>
                  <p className="text-muted-foreground">We have secured a room block at the Lungarno Hotel. Mention "Aethel Wedding" for a special rate.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="animate-fade-in-up" delay="0.3s">
                <div className="space-y-4">
                  <Car className="w-8 h-8 text-accent stroke-[1px]" />
                  <h3 className="font-headline text-2xl text-primary">Parking</h3>
                  <p className="text-muted-foreground">Valet parking is available at the villa entrance starting at 2:30 PM on the day of the wedding.</p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal animation="animate-fade-in-right">
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/5 rounded-[2rem] -rotate-2 group-hover:rotate-0 transition-transform" />
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={venueImg?.imageUrl || ''}
                  alt="Villa di Maiano"
                  fill
                  className="object-cover"
                  data-ai-hint="wedding venue"
                />
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                  <div className="bg-background/90 backdrop-blur px-6 py-4 rounded-full shadow-lg flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform">
                    <MapPin className="text-accent" />
                    <span className="font-headline">Get Directions</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
