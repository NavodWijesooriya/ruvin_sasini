
import { Clock, GlassWater, Heart, Music, Utensils } from 'lucide-react';
import Location from '@/components/Location';
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

const events_second_day = [
  {
    time: '6:00 PM',
    title: 'Reception Begins',
    description: 'Guests arrive at Sundale Hotel, Divulapitiya for the wedding reception celebration.',
    icon: Heart,
  },
  {
    time: 'Evening',
    title: 'Dinner & Celebration',
    description: 'Enjoy delicious cuisine and heartfelt moments with family and friends.',
    icon: Utensils,
  },
  {
    time: 'Night',
    title: 'Dancing & Entertainment',
    description: 'Dance the night away with music, entertainment, and joyful celebrations.',
    icon: Music,
  },
  {
    time: '12:00 AM',
    title: 'Farewell',
    description: 'End the magical celebration with warm wishes and precious memories.',
    icon: GlassWater,
  },
];

export default function Timeline() {
  return (
    <section id="schedule" className="py-24 bg-card/50">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-6xl text-primary mb-4">The First Day</h2>
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

        <div className="mt-20">
          <Location
            id="location-first-day"
            title="First Day Venue"
            venue="St. Joseph's Church, Walikada"
            note="Guests attending the ceremony should plan to arrive a little early so they can settle in before the service begins."
            mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126694.9109887608!2d79.81089089726565!3d7.100950000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fa43c4cab6f1%3A0xa9696945f6b6f46a!2zU3QuSm9zZXBoJ3MgQ2h1cmNoIC0gV2VsaWthZGEgfCDgt4Pgt48uIOC2ouC3neC3geC2tOC3iiDgtq_gt5rgt4Dgt4Pgt4rgtq7gt4_gtrHgtrogLSDgt4Dgt5Dgtr3gt5Lgtprgtqk!5e0!3m2!1sen!2slk!4v1783510494923!5m2!1sen!2slk"
            travelNote="Plan a little extra time if you are traveling from outside Walikada, and aim to arrive before 9:30 AM so you can settle in before the ceremony."
            stayNote="If you are staying overnight, choose a nearby hotel or guesthouse in Colombo or the surrounding area for an easier morning arrival."
            parkingNote="Street parking can be limited near the church, so a drop-off or early arrival is the easiest option."
          />
        </div>

        <ScrollReveal>
          <div className="text-center mb-16 mt-24">
            <h2 className="font-headline text-4xl md:text-6xl text-primary mb-4">The Second Day</h2>
            <p className="text-muted-foreground">Saturday, August 8, 2026</p>
          </div>
        </ScrollReveal>

        <div className="space-y-12">
          {events_second_day.map((event, index) => (
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

        <div className="mt-20">
          <Location
            id="location-second-day"
            title="Second Day Venue"
            venue="Sundale Hotel, Divulapitiya"
            note="The reception celebration takes place here in the evening, so guests can head straight to the hotel for dinner and festivities."
            mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.1199105415585!2d80.00206017448474!3d7.227161514587582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2e40941cdcdd9%3A0x9c6b763ae3289ade!2sSundale%20Hotel!5e0!3m2!1sen!2slk!4v1783947565113!5m2!1sen!2slk"
            travelNote="Allow extra time for the evening drive and plan your route ahead of time so you can arrive comfortably before the reception starts."
            stayNote="If you need a place to stay nearby, look for accommodation around Divulapitiya or along the route to keep the return trip easy."
            parkingNote="Use the hotel parking or a designated drop-off point if available so arrival remains smooth during the evening rush."
          />
        </div>
      </div>
    </section>
  );
}
