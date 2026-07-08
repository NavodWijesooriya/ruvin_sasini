
import Image from 'next/image';
import storyInvitationImage from '@/assets/images/DSC_082300.jpg.jpeg';
import invitationDetailImage from '@/assets/images/DSC00048-1.jpeg';
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
                src={storyInvitationImage}
                alt="A floral save-the-date card for Ruwin and Sasini"
                fill
                className="object-cover"
                data-ai-hint="romantic couple"
              />
            </div>
          </ScrollReveal>
        </div>

        <div className="md:col-span-7 space-y-8 md:pl-12">
          <ScrollReveal animation="animate-fade-in-right">
            <h2 className="font-headline text-4xl md:text-6xl text-primary mb-8">A closer look at the invitation</h2>
            <div className="prose prose-lg text-muted-foreground font-body space-y-4">
              <p>
                The card is designed like a framed keepsake: soft white space, watercolor violets climbing up the left edge, and elegant script that drifts across the page like hand-written calligraphy.
              </p>
              <p>
                At the center of the design, the family names and formal wording lead into the couple's names, Ruwin and Sasini, before landing on the date, Thursday, August 6, 2026, and the ceremony location, St. Joseph's Church in Walikada. It reads less like a simple announcement and more like a promise of a day built around faith, family, and celebration.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-4 pt-8">
            <ScrollReveal animation="animate-fade-in-up" delay="0.2s">
              <div className="relative h-48 rounded-xl overflow-hidden shadow-lg transform translate-y-8">
                <Image
                  src={invitationDetailImage}
                  alt="Invitation detail"
                  fill
                  className="object-cover"
                  data-ai-hint="wedding rings"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal animation="animate-fade-in-up" delay="0.4s">
              <div className="flex flex-col justify-end h-full">
                <p className="font-headline italic text-xl text-primary">"A floral border, a carefully chosen script, and one clear date turn the invitation into a memory before the ceremony even begins."</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
