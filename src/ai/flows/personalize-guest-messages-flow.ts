'use server';
/**
 * @fileOverview A GenAI tool to generate personalized messages for wedding guests.
 *
 * - personalizeGuestMessage - A function that generates a personalized message for a guest.
 * - PersonalizeGuestMessageInput - The input type for the personalizeGuestMessage function.
 * - PersonalizeGuestMessageOutput - The return type for the personalizeGuestMessage function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const PersonalizeGuestMessageInputSchema = z.object({
  guestName: z.string().describe("The name of the guest."),
  rsvpStatus: z.string().describe("The guest's RSVP status (e.g., 'Confirmed', 'Declined', 'Pending')."),
  mealPreference: z.string().optional().describe("The guest's meal preference (e.g., 'Chicken', 'Vegetarian', 'Vegan')."),
  dietaryRestrictions: z.string().optional().describe("Any dietary restrictions the guest has (e.g., 'Gluten-free', 'Nut allergy')."),
  group: z.string().optional().describe("The group the guest belongs to (e.g., 'Family', 'Friends', 'Wedding Party')."),
  messageType: z.enum(['thank_you', 'arrival_instructions']).describe("The type of message to generate: 'thank_you' or 'arrival_instructions'."),
  additionalContext: z.string().optional().describe("Any additional context or specific details to include in the message."),
});
export type PersonalizeGuestMessageInput = z.infer<typeof PersonalizeGuestMessageInputSchema>;

const PersonalizeGuestMessageOutputSchema = z.object({
  personalizedMessage: z.string().describe("The generated personalized message for the guest."),
});
export type PersonalizeGuestMessageOutput = z.infer<typeof PersonalizeGuestMessageOutputSchema>;

export async function personalizeGuestMessage(input: PersonalizeGuestMessageInput): Promise<PersonalizeGuestMessageOutput> {
  return personalizeGuestMessagesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizeGuestMessagePrompt',
  input: { schema: PersonalizeGuestMessageInputSchema },
  output: { schema: PersonalizeGuestMessageOutputSchema },
  prompt: `You are an AI assistant tasked with generating personalized messages for wedding guests.

Generate a {{messageType}} message for the guest based on the following information:

Guest Name: {{{guestName}}}
RSVP Status: {{{rsvpStatus}}}
{{#if mealPreference}}Meal Preference: {{{mealPreference}}}{{/if}}
{{#if dietaryRestrictions}}Dietary Restrictions: {{{dietaryRestrictions}}}{{/if}}
{{#if group}}Group: {{{group}}}{{/if}}
{{#if additionalContext}}Additional Context: {{{additionalContext}}}{{/if}}

---

{{#ifeq messageType "thank_you"}}
Draft a warm and personal thank-you message. Acknowledge their RSVP and mention any specific details like their meal preference if applicable. If their RSVP status is 'Declined', offer a kind sentiment. Keep the tone appreciative and celebratory.

Example:
"Dear [Guest Name],
Thank you so much for celebrating our special day with us! We hope you enjoyed the [Meal Preference] and had a wonderful time. Your presence meant the world to us.
With love,
[Couple's Names]"
{{/ifeq}}

{{#ifeq messageType "arrival_instructions"}}
Compose clear and helpful arrival instructions. Include any relevant details based on their group or additional context provided. Keep the tone welcoming and informative.

Example:
"Dear [Guest Name],
We're so excited for you to join us! Here are some important details for your arrival:
[Specific instructions based on group/context, e.g., 'Parking is available at...', 'Please arrive by...', 'Your shuttle will depart from...']
If you have any questions, please don't hesitate to contact us.
See you soon,
[Couple's Names]"
{{/ifeq}}

Please ensure the message is polite, concise, and directly addresses the guest using the provided details. Output only the personalized message in the 'personalizedMessage' field.`,
});

const personalizeGuestMessagesFlow = ai.defineFlow(
  {
    name: 'personalizeGuestMessagesFlow',
    inputSchema: PersonalizeGuestMessageInputSchema,
    outputSchema: PersonalizeGuestMessageOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
