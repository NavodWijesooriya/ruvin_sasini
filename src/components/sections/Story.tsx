
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
                alt="A floral save-the-date card for Ruvin and Sasini"
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
                From the very beginning, our journey together has been woven with shared dreams, quiet laughter, and a deep, anchoring faith. We’ve always believed that the best love stories aren’t just about the moments that take your breath away, but about the steady, beautiful foundation you build together day by day.

                Like the watercolor violets that frame our invitation—symbols of devotion, faithfulness, and everlasting love—our bond has grown naturally, rooted in family and nurtured by grace. Through every season, we have found in each other a best friend, a confidant, and a home.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
            <ScrollReveal animation="animate-fade-in-up" delay="0.2s">
              <div className="relative h-56 sm:h-48 rounded-xl overflow-hidden shadow-lg transform translate-y-0 sm:translate-y-8">
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
