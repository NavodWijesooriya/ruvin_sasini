import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getAdminFirestore } from '@/lib/firebase-admin';
import { GuestResponse, RSVPStatus } from '@/lib/types';

const rsvpSchema = z.object({
  guestName: z.string().trim().min(2, 'Name is required'),
  rsvpStatus: z.enum(['Confirmed', 'Declined', 'Pending']),
});

const COLLECTION_NAME = 'rsvpResponses';

function toGuestResponse(id: string, data: FirebaseFirestore.DocumentData): GuestResponse {
  return {
    id,
    guestName: String(data.guestName ?? ''),
    rsvpStatus: data.rsvpStatus as RSVPStatus,
    submittedAt: String(data.submittedAt ?? new Date().toISOString()),
  };
}

export async function GET() {
  try {
    const snapshot = await getAdminFirestore()
      .collection(COLLECTION_NAME)
      .orderBy('submittedAt', 'desc')
      .get();

    return NextResponse.json(snapshot.docs.map((document) => toGuestResponse(document.id, document.data())));
  } catch (error) {
    console.error('Failed to load RSVP responses', error);
    return NextResponse.json({ error: 'Failed to load RSVP responses' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = rsvpSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid RSVP submission' }, { status: 400 });
    }

    const response: Omit<GuestResponse, 'id'> = {
      guestName: parsed.data.guestName,
      rsvpStatus: parsed.data.rsvpStatus,
      submittedAt: new Date().toISOString(),
    };

    const document = await getAdminFirestore().collection(COLLECTION_NAME).add(response);

    return NextResponse.json({ id: document.id, ...response }, { status: 201 });
  } catch (error) {
    console.error('Failed to save RSVP response', error);
    return NextResponse.json({ error: 'Failed to save RSVP response' }, { status: 500 });
  }
}