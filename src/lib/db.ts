
'use client';

import { GuestResponse } from './types';

type RSVPInput = Omit<GuestResponse, 'id' | 'submittedAt'>;

const RSVP_API_ROUTE = '/api/rsvp';

async function readResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const payload = await response.json().catch(() => null);
    const message = payload?.error ?? 'Unable to process RSVP request';
    throw new Error(message);
  }

  return response.json() as Promise<T>;
}

export const saveRSVP = async (response: RSVPInput) => {
  const apiResponse = await fetch(RSVP_API_ROUTE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(response),
  });

  return readResponse<GuestResponse>(apiResponse);
};

export const getResponses = async (): Promise<GuestResponse[]> => {
  const apiResponse = await fetch(RSVP_API_ROUTE, {
    method: 'GET',
    cache: 'no-store',
  });

  return readResponse<GuestResponse[]>(apiResponse);
};

export const clearResponses = async () => {
  throw new Error('Clearing RSVP responses is not supported yet.');
};
