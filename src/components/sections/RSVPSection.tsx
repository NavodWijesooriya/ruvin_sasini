
"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { saveRSVP } from '@/lib/db';
import { CheckCircle2 } from 'lucide-react';

const rsvpSchema = z.object({
  guestName: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  rsvpStatus: z.enum(['Confirmed', 'Declined', 'Pending']),
  mealPreference: z.string().optional(),
  dietaryRestrictions: z.string().optional(),
  group: z.string().optional(),
  additionalNote: z.string().optional(),
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
          <h2 className="font-headline text-4xl md:text-6xl text-primary mb-4">Will You Attend?</h2>
          <p className="text-muted-foreground">Please respond by September 1st, 2025</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-card p-8 rounded-3xl shadow-xl border border-primary/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="john@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

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

            {form.watch('rsvpStatus') === 'Confirmed' && (
              <div className="space-y-6 animate-fade-in-up">
                <FormField
                  control={form.control}
                  name="mealPreference"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Meal Preference</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a meal" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Traditional Tuscan Beef">Traditional Tuscan Beef</SelectItem>
                          <SelectItem value="Grilled Seabass">Grilled Seabass</SelectItem>
                          <SelectItem value="Wild Mushroom Risotto (V)">Wild Mushroom Risotto (V)</SelectItem>
                          <SelectItem value="Vegan Harvest Plate (VG)">Vegan Harvest Plate (VG)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="dietaryRestrictions"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Dietary Restrictions</FormLabel>
                      <FormControl>
                        <Input placeholder="Gluten-free, Nut allergy, etc." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="group"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Whose Guest Are You?</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select group" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Arthur's Family">Arthur's Family</SelectItem>
                          <SelectItem value="Elara's Family">Elara's Family</SelectItem>
                          <SelectItem value="Friends">Friends</SelectItem>
                          <SelectItem value="Wedding Party">Wedding Party</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            <FormField
              control={form.control}
              name="additionalNote"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message for the Couple</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Share your love..." {...field} />
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
