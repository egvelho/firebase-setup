import { useEffect } from "react";
import firebase from "firebase/app";
import firebaseConfig from "./firebase-config";

export interface Message {
  data: unknown;
  notification: {
    title: string;
    body: string;
    tag: string;
    image?: string;
  };
}

interface Props {
  onMessage?: (message: Message) => Promise<void>;
  onTokenRefresh?: (token: string) => Promise<void>;
  beforeRequestPermission?: () => Promise<void>;
}

async function startNotifications({
  onMessage,
  onTokenRefresh,
  beforeRequestPermission,
}: Props) {
  const messagingInstance = firebase.messaging();

  messagingInstance.usePublicVapidKey(firebaseConfig.publicVapidKey ?? "");

  if (!("Notification" in window) || !firebase.messaging.isSupported()) {
    return;
  }

  beforeRequestPermission && (await beforeRequestPermission());
  const permission = await Notification.requestPermission();

  if (permission === "granted") {
    const token = await messagingInstance.getToken();
    onTokenRefresh && onTokenRefresh(token);
  }

  messagingInstance.onTokenRefresh(async () => {
    const token = await messagingInstance.getToken();
    onTokenRefresh && onTokenRefresh(token);
  });

  onMessage && messagingInstance.onMessage(onMessage);
}

export function WithNotifications(props: Props) {
  useEffect(() => {
    startNotifications(props);
  }, []);

  return null;
}
