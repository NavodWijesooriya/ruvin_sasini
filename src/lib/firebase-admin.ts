import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import fs from "fs";
import path from "path";

function createAdminApp() {
  if (getApps().length) {
    return getApps()[0];
  }

  const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  let serviceAccount;

  if (serviceAccountKey) {
    // Vercel Production: Base64 String එක සාමාන්‍ය JSON එකක් බවට Decode කරයි
    const decodedKey = Buffer.from(serviceAccountKey, 'base64').toString('utf8');
    serviceAccount = JSON.parse(decodedKey);
  } else {
    // Localhost Development: සාමාන්‍ය පරිදි ෆයිල් එක කියවයි
    const serviceAccountPath = path.join(
      process.cwd(),
      "firebase-service-account.json"
    );
    serviceAccount = JSON.parse(
      fs.readFileSync(serviceAccountPath, "utf8")
    );
  }

  return initializeApp({
    credential: cert(serviceAccount),
  });
}

export function getAdminFirestore() {
  return getFirestore(createAdminApp());
}