
export type RSVPStatus = 'Confirmed' | 'Declined' | 'Pending';

export interface GuestResponse {
  id: string;
  guestName: string;
  email: string;
  rsvpStatus: RSVPStatus;
  mealPreference?: string;
  dietaryRestrictions?: string;
  group?: string;
  additionalNote?: string;
  submittedAt: string;
}

export type MessageType = 'thank_you' | 'arrival_instructions';
