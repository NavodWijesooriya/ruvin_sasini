
import { Clock, GlassWater, Heart, Music, Utensils } from 'lucide-react';
import ScrollReveal from '@/components/ui/scroll-reveal';

const events = [
  {
    time: '9:30 AM',
    title: 'Guest Arrival',
    description: 'Guests gather at St. Joseph\'s Church, Walikada, and settle in before the service begins.',
    icon: Heart,
  },
  {
    time: 'Morning',
    title: 'The Ceremony',
    description: 'A formal church wedding with prayers, vows, and blessings for the couple.',
    icon: GlassWater,
  },
  {
    time: 'After the Service',
    title: 'Family Greetings',
    description: 'Time for photos, congratulations, and a few quiet moments with family and friends.',
    icon: Utensils,
  },
  {
    time: 'Later',
    title: 'Celebration',
    description: 'The day continues with refreshments and heartfelt conversations.',
    icon: Music,
  },
];

export default function Timeline() {
  return (
    <section id="schedule" className="py-24 bg-card/50">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-6xl text-primary mb-4">The Day</h2>
            <p className="text-muted-foreground">Thursday, August 6, 2026</p>
          </div>
        </ScrollReveal>

        <div className="space-y-12">
          {events.map((event, index) => (
            <ScrollReveal
              key={index}
              animation={index % 2 === 0 ? "animate-fade-in-left" : "animate-fade-in-right"}
              delay={`${index * 0.15}s`}
            >
              <div className="flex flex-col md:flex-row gap-8 items-center text-center md:text-left group">
                <div className="w-24 h-24 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                  <event.icon className="w-10 h-10 text-accent stroke-[1px]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-semibold text-accent uppercase tracking-widest">{event.time}</span>
                  </div>
                  <h3 className="font-headline text-2xl text-primary mb-2">{event.title}</h3>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
