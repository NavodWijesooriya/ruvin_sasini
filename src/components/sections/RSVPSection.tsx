"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { saveRSVP } from '@/lib/db';
import { CheckCircle2 } from 'lucide-react';

const rsvpSchema = z.object({
  guestName: z.string().min(2, "Name is required"),
  rsvpStatus: z.enum(['Confirmed', 'Declined', 'Pending']),
});

type RSVPFormValues = z.infer<typeof rsvpSchema>;

export default function RSVPSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<RSVPFormValues>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      rsvpStatus: 'Confirmed',
    },
  });

  const onSubmit = (data: RSVPFormValues) => {
    saveRSVP(data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className="py-24 bg-background px-6">
        <div className="max-w-xl mx-auto text-center space-y-6 py-12 border-2 border-dashed border-primary/20 rounded-3xl animate-fade-in-up">
          <CheckCircle2 className="w-16 h-16 text-accent mx-auto" />
          <h2 className="font-headline text-4xl text-primary">Thank You!</h2>
          <p className="text-muted-foreground px-8">Your RSVP has been received. We can't wait to see you there!</p>
          <Button variant="outline" onClick={() => setIsSubmitted(false)}>Submit another response</Button>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-24 bg-background px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-6xl text-primary mb-4">Will You Join Us?</h2>
          <p className="text-muted-foreground">Let us know if you'll be with us for the church ceremony and celebrations.</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-card p-8 rounded-3xl shadow-xl border border-primary/5">
            <FormField
              control={form.control}
              name="guestName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="rsvpStatus"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Attendance</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Confirmed" />
                        </FormControl>
                        <FormLabel className="font-normal">Joyfully Accepts</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Declined" />
                        </FormControl>
                        <FormLabel className="font-normal">Regretfully Declines</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full h-12 text-lg bg-accent hover:bg-accent/90">
              Submit RSVP
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
