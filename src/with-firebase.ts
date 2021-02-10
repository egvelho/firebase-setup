import { useEffect } from "react";
import firebase from "firebase/app";
import firebaseConfig from "./firebase-config";

import("firebase/messaging");
import("firebase/analytics");
import("firebase/auth");

interface Options {
  analytics: boolean;
  onAuthIdTokenChange: (idToken: string | undefined) => void;
}

async function initializeApp({ analytics, onAuthIdTokenChange }: Options) {
  if (firebase.apps.length) {
    return;
  }

  firebase.initializeApp(firebaseConfig);
  analytics && firebase.analytics();
  onAuthIdTokenChange &&
    firebase.auth().onIdTokenChanged(async (user) => {
      if (user) {
        onAuthIdTokenChange(await user.getIdToken());
      } else {
        onAuthIdTokenChange(undefined);
      }
    });
}

export function WithFirebase({
  analytics = false,
  onAuthIdTokenChange = (idToken: string | undefined) => {},
}: Partial<Options> = {}) {
  useEffect(() => {
    initializeApp({ analytics, onAuthIdTokenChange });
  }, []);
  return null;
}
