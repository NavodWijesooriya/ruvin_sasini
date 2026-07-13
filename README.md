# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at [src/app/page.tsx](src/app/page.tsx).

## RSVP backend

The RSVP form now posts to `POST /api/rsvp`, which stores each response in Firestore under the `rsvpResponses` collection and serves the admin dashboard from the same source.

For local development or deployment, make sure Firebase Admin can authenticate with Firestore. Either run in Firebase-hosted infrastructure with default credentials, or provide a service account JSON string through `FIREBASE_SERVICE_ACCOUNT_KEY`.

If you want local writes against the Firestore emulator, set `FIRESTORE_EMULATOR_HOST` before starting the app.
