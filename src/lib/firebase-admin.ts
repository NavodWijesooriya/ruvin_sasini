import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import fs from "fs";
import path from "path";

function createAdminApp() {
  if (getApps().length) {
    return getApps()[0];
  }

  // 1. Vercel එකේ අපි සෙට් කරපු Environment Variable එක තියෙනවාදැයි බලන්න
  const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  let serviceAccount;

  if (serviceAccountKey) {
    // Vercel Production: Text එකක් ලෙස ඇති JSON එක Object එකක් බවට පත් කරයි
    serviceAccount = JSON.parse(serviceAccountKey);
  } else {
    // Localhost Development: Variable එක නැති නිසා සාමාන්‍ය පරිදි ෆයිල් එක කියවයි
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