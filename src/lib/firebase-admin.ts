import { cert, getApps, initializeApp, type App } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

let adminApp: App | null = null;

function createAdminApp(): App {
  if (adminApp) {
    return adminApp;
  }

  if (getApps().length > 0) {
    adminApp = getApps()[0];
    return adminApp;
  }

  const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

  if (serviceAccountJson) {
    // 1. Parse the credentials file
    const parsedCredentials = JSON.parse(serviceAccountJson);

    // 2. Explicitly feed both the credentials AND the project_id to the SDK
    adminApp = initializeApp({
      credential: cert(parsedCredentials),
      projectId: parsedCredentials.project_id, // <-- This guarantees Firestore knows where to look
    });
    return adminApp;
  }

  // Fallback for environments like Google Cloud Run / App Engine where it initializes automatically
  adminApp = initializeApp();
  return adminApp;
}

export function getAdminFirestore() {
  return getFirestore(createAdminApp());
}