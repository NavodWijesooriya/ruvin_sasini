
import { MapPin, Plane, Car, Hotel } from 'lucide-react';
import ScrollReveal from '@/components/ui/scroll-reveal';

export default function Location() {
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
                  St. Joseph's Church, Walikada
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <ScrollReveal animation="animate-fade-in-up" delay="0.1s">
                <div className="space-y-4">
                  <Plane className="w-8 h-8 text-accent stroke-[1px]" />
                  <h3 className="font-headline text-2xl text-primary">Travel</h3>
                  <p className="text-muted-foreground">Plan a little extra time if you are traveling from outside Walikada, and aim to arrive before 9:30 AM so you can settle in before the ceremony.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="animate-fade-in-up" delay="0.2s">
                <div className="space-y-4">
                  <Hotel className="w-8 h-8 text-accent stroke-[1px]" />
                  <h3 className="font-headline text-2xl text-primary">Stay</h3>
                  <p className="text-muted-foreground">If you are staying overnight, choose a nearby hotel or guesthouse in Colombo or the surrounding area for an easier morning arrival.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="animate-fade-in-up" delay="0.3s">
                <div className="space-y-4">
                  <Car className="w-8 h-8 text-accent stroke-[1px]" />
                  <h3 className="font-headline text-2xl text-primary">Parking</h3>
                  <p className="text-muted-foreground">Street parking can be limited near the church, so a drop-off or early arrival is the easiest option.</p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal animation="animate-fade-in-right">
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/5 rounded-[2rem] -rotate-2 group-hover:rotate-0 transition-transform" />
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-background">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126694.9109887608!2d79.81089089726565!3d7.100950000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fa43c4cab6f1%3A0xa9696945f6b6f46a!2zU3QuSm9zZXBoJ3MgQ2h1cmNoIC0gV2VsaWthZGEgfCDgt4Pgt48uIOC2ouC3neC3geC2tOC3iiDgtq_gt5rgt4Dgt4Pgt4rgtq7gt4_gtrHgtrogLSDgt4Dgt5Dgtr3gt5Lgtprgtqk!5e0!3m2!1sen!2slk!4v1783510494923!5m2!1sen!2slk"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="St. Joseph's Church, Walikada"
                  className="absolute inset-0 h-full w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur px-5 py-3 rounded-full shadow-lg flex items-center gap-3">
                  <MapPin className="text-accent" />
                  <span className="font-headline">St. Joseph's Church, Walikada</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
