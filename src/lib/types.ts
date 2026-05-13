
export type RSVPStatus = 'Confirmed' | 'Declined' | 'Pending';

export interface GuestResponse {
  id: string;
  guestName: string;
  rsvpStatus: RSVPStatus;
  submittedAt: string;
}

export type MessageType = 'thank_you' | 'arrival_instructions';
