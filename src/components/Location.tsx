
import { MapPin, Plane, Car, Hotel } from 'lucide-react';
import ScrollReveal from '@/components/ui/scroll-reveal';

type LocationProps = {
  id?: string;
  title: string;
  venue: string;
  note: string;
  mapSrc: string;
  travelNote: string;
  stayNote: string;
  parkingNote: string;
};

export default function Location({
  id,
  title,
  venue,
  note,
  mapSrc,
  travelNote,
  stayNote,
  parkingNote,
}: LocationProps) {
  return (
    <section id={id} className="py-24 px-6 md:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <ScrollReveal animation="animate-fade-in-left">
              <div>
                <h2 className="font-headline text-4xl md:text-6xl text-primary mb-6">{title}</h2>
                <p className="text-xl text-muted-foreground flex items-start gap-2">
                  <MapPin className="w-6 h-6 text-accent shrink-0 mt-1" />
                  {venue}
                </p>
                <p className="mt-4 max-w-xl text-muted-foreground">{note}</p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <ScrollReveal animation="animate-fade-in-up" delay="0.1s">
                <div className="space-y-4">
                  <Plane className="w-8 h-8 text-accent stroke-[1px]" />
                  <h3 className="font-headline text-2xl text-primary">Travel</h3>
                  <p className="text-muted-foreground">{travelNote}</p>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="animate-fade-in-up" delay="0.2s">
                <div className="space-y-4">
                  <Hotel className="w-8 h-8 text-accent stroke-[1px]" />
                  <h3 className="font-headline text-2xl text-primary">Stay</h3>
                  <p className="text-muted-foreground">{stayNote}</p>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="animate-fade-in-up" delay="0.3s">
                <div className="space-y-4">
                  <Car className="w-8 h-8 text-accent stroke-[1px]" />
                  <h3 className="font-headline text-2xl text-primary">Parking</h3>
                  <p className="text-muted-foreground">{parkingNote}</p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal animation="animate-fade-in-right">
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/5 rounded-[2rem] -rotate-2 group-hover:rotate-0 transition-transform" />
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-background">
                <iframe
                  src={mapSrc}
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title={venue}
                  className="absolute inset-0 h-full w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur px-5 py-3 rounded-full shadow-lg flex items-center gap-3">
                  <MapPin className="text-accent" />
                  <span className="font-headline">{venue}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
