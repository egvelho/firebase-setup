import { useEffect } from "react";
import firebase from "firebase/app";
import firebaseConfig from "./firebase-config";

interface Options {
  analytics: boolean;
  notifications: boolean;
  auth: boolean;
}

async function initializeApp({
  analytics = false,
  notifications = false,
  auth = false,
}: Options) {
  if (firebase.apps.length) {
    return;
  }

  notifications && (await import("firebase/messaging"));
  analytics && (await import("firebase/analytics"));
  auth && (await import("firebase/auth"));

  firebase.initializeApp(firebaseConfig);

  analytics && firebase.analytics();
  auth &&
    firebaseConfig.languageCode &&
    (firebase.auth().languageCode = firebaseConfig.languageCode);
}

export function WithFirebase({
  analytics = false,
  notifications = false,
  auth = false,
}: Partial<Options> = {}) {
  useEffect(() => {
    initializeApp({ analytics, notifications, auth });
  }, []);
  return null;
}
