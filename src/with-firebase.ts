import { useEffect } from "react";
import firebase from "firebase/app";
import firebaseConfig from "./firebase-config";

import("firebase/messaging");
import("firebase/analytics");
import("firebase/auth");

interface Options {
  analytics: boolean;
}

async function initializeApp({ analytics = false }: Options) {
  if (firebase.apps.length) {
    return;
  }

  firebase.initializeApp(firebaseConfig);
  analytics && firebase.analytics();
}

export function WithFirebase({ analytics = false }: Partial<Options> = {}) {
  useEffect(() => {
    initializeApp({ analytics });
  }, []);
  return null;
}
