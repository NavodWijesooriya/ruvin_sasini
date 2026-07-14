import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import fs from "fs";
import path from "path";

function createAdminApp() {
  if (getApps().length) {
    return getApps()[0];
  }

  const serviceAccountPath = path.join(
    process.cwd(),
    "firebase-service-account.json"
  );

  const serviceAccount = JSON.parse(
    fs.readFileSync(serviceAccountPath, "utf8")
  );

  return initializeApp({
    credential: cert(serviceAccount),
  });
}

export function getAdminFirestore() {
  return getFirestore(createAdminApp());
}