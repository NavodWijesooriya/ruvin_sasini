
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ScrollReveal from '@/components/ui/scroll-reveal';

export default function Story() {
  const img1 = PlaceHolderImages.find(img => img.id === 'story-1');
  const img2 = PlaceHolderImages.find(img => img.id === 'story-2');

  return (
    <section id="story" className="py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5">
          <ScrollReveal animation="animate-fade-in-left">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={img1?.imageUrl || ''}
                alt="Elara and Arthur"
                fill
                className="object-cover"
                data-ai-hint="romantic couple"
              />
            </div>
          </ScrollReveal>
        </div>
        
        <div className="md:col-span-7 space-y-8 md:pl-12">
          <ScrollReveal animation="animate-fade-in-right">
            <h2 className="font-headline text-4xl md:text-6xl text-primary mb-8">How it all began...</h2>
            <div className="prose prose-lg text-muted-foreground font-body space-y-4">
              <p>
                It started with a shared umbrella on a rainy Tuesday in Florence. Elara was rushing to a lecture, and Arthur was trying to find a hidden bookstore.
              </p>
              <p>
                Five years, three continents, and one very energetic golden retriever later, we're making it official. Our journey has been defined by late-night conversations, shared dreams, and a mutual love for the quiet moments between the milestones.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 gap-4 pt-8">
            <ScrollReveal animation="animate-fade-in-up" delay="0.2s">
              <div className="relative h-48 rounded-xl overflow-hidden shadow-lg transform translate-y-8">
                <Image
                  src={img2?.imageUrl || ''}
                  alt="Details"
                  fill
                  className="object-cover"
                  data-ai-hint="wedding rings"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal animation="animate-fade-in-up" delay="0.4s">
              <div className="flex flex-col justify-end h-full">
                <p className="font-headline italic text-xl text-primary">"Every heart sings a song, incomplete, until another heart whispers back."</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
