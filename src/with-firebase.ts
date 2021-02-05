import { useEffect } from "react";
import firebase from "firebase/app";
import firebaseConfig from "./firebase-config";

interface Options {
  withAnalytics: boolean;
  withNotifications: boolean;
  withAuth: boolean;
}

async function initializeApp({
  withAnalytics = false,
  withNotifications = false,
  withAuth = false,
}: Options) {
  if (firebase.apps.length) {
    return;
  }

  withNotifications && (await import("firebase/messaging"));
  withAnalytics && (await import("firebase/analytics"));
  withAuth && (await import("firebase/auth"));

  firebase.initializeApp(firebaseConfig);

  withAnalytics && firebase.analytics();
  withAuth &&
    firebaseConfig.languageCode &&
    (firebase.auth().languageCode = firebaseConfig.languageCode);
}

export function WithFirebase({
  withAnalytics = false,
  withNotifications = false,
  withAuth = false,
}: Options) {
  useEffect(() => {
    initializeApp({ withAnalytics, withNotifications, withAuth });
  }, []);
  return null;
}
