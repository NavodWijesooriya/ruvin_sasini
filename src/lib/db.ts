
"use client";

import { GuestResponse } from './types';

const STORAGE_KEY = 'aethel_rsvp_responses';

export const saveRSVP = (response: Omit<GuestResponse, 'id' | 'submittedAt'>) => {
  if (typeof window === 'undefined') return;
  
  const existing = getResponses();
  const newResponse: GuestResponse = {
    ...response,
    id: Math.random().toString(36).substr(2, 9),
    submittedAt: new Date().toISOString(),
  };
  
  const updated = [...existing, newResponse];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return newResponse;
};

export const getResponses = (): GuestResponse[] => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const clearResponses = () => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
};
