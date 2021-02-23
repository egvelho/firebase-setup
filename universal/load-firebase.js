"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadFirebase = void 0;
function loadFirebase(_a) {
    var outPath = _a.outPath;
    if (typeof window !== "undefined") {
        return;
    }
    eval('require("dotenv").config()');
    var fs = eval('require("fs")');
    var path = eval('require("path")');
    var https = eval('require("https")');
    var packageJson = eval('require("../package.json")');
    var _b = process.env, NEXT_PUBLIC_FIREBASE_API_KEY = _b.NEXT_PUBLIC_FIREBASE_API_KEY, NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = _b.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN, NEXT_PUBLIC_FIREBASE_DATABASE_URL = _b.NEXT_PUBLIC_FIREBASE_DATABASE_URL, NEXT_PUBLIC_FIREBASE_PROJECT_ID = _b.NEXT_PUBLIC_FIREBASE_PROJECT_ID, NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET = _b.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET, NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID = _b.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID, NEXT_PUBLIC_FIREBASE_APP_ID = _b.NEXT_PUBLIC_FIREBASE_APP_ID, NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID = _b.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID, NEXT_PUBLIC_FIREBASE_PUBLIC_VAPID_KEY = _b.NEXT_PUBLIC_FIREBASE_PUBLIC_VAPID_KEY, REACT_APP_FIREBASE_API_KEY = _b.REACT_APP_FIREBASE_API_KEY, REACT_APP_FIREBASE_AUTH_DOMAIN = _b.REACT_APP_FIREBASE_AUTH_DOMAIN, REACT_APP_FIREBASE_DATABASE_URL = _b.REACT_APP_FIREBASE_DATABASE_URL, REACT_APP_FIREBASE_PROJECT_ID = _b.REACT_APP_FIREBASE_PROJECT_ID, REACT_APP_FIREBASE_STORAGE_BUCKET = _b.REACT_APP_FIREBASE_STORAGE_BUCKET, REACT_APP_FIREBASE_MESSAGING_SENDER_ID = _b.REACT_APP_FIREBASE_MESSAGING_SENDER_ID, REACT_APP_FIREBASE_APP_ID = _b.REACT_APP_FIREBASE_APP_ID, REACT_APP_FIREBASE_MEASUREMENT_ID = _b.REACT_APP_FIREBASE_MEASUREMENT_ID, REACT_APP_FIREBASE_PUBLIC_VAPID_KEY = _b.REACT_APP_FIREBASE_PUBLIC_VAPID_KEY, FIREBASE_API_KEY = _b.FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN = _b.FIREBASE_AUTH_DOMAIN, FIREBASE_DATABASE_URL = _b.FIREBASE_DATABASE_URL, FIREBASE_PROJECT_ID = _b.FIREBASE_PROJECT_ID, FIREBASE_STORAGE_BUCKET = _b.FIREBASE_STORAGE_BUCKET, FIREBASE_MESSAGING_SENDER_ID = _b.FIREBASE_MESSAGING_SENDER_ID, FIREBASE_APP_ID = _b.FIREBASE_APP_ID, FIREBASE_MEASUREMENT_ID = _b.FIREBASE_MEASUREMENT_ID, FIREBASE_PUBLIC_VAPID_KEY = _b.FIREBASE_PUBLIC_VAPID_KEY;
    var firebaseConfig = {
        apiKey: NEXT_PUBLIC_FIREBASE_API_KEY ||
            REACT_APP_FIREBASE_API_KEY ||
            FIREBASE_API_KEY,
        authDomain: NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ||
            REACT_APP_FIREBASE_AUTH_DOMAIN ||
            FIREBASE_AUTH_DOMAIN,
        databaseURL: NEXT_PUBLIC_FIREBASE_DATABASE_URL ||
            REACT_APP_FIREBASE_DATABASE_URL ||
            FIREBASE_DATABASE_URL,
        projectId: NEXT_PUBLIC_FIREBASE_PROJECT_ID ||
            REACT_APP_FIREBASE_PROJECT_ID ||
            FIREBASE_PROJECT_ID,
        storageBucket: NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ||
            REACT_APP_FIREBASE_STORAGE_BUCKET ||
            FIREBASE_STORAGE_BUCKET,
        messagingSenderId: NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ||
            REACT_APP_FIREBASE_MESSAGING_SENDER_ID ||
            FIREBASE_MESSAGING_SENDER_ID,
        appId: NEXT_PUBLIC_FIREBASE_APP_ID ||
            REACT_APP_FIREBASE_APP_ID ||
            FIREBASE_APP_ID,
        measurementId: NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ||
            REACT_APP_FIREBASE_MEASUREMENT_ID ||
            FIREBASE_MEASUREMENT_ID,
        publicVapidKey: NEXT_PUBLIC_FIREBASE_PUBLIC_VAPID_KEY ||
            REACT_APP_FIREBASE_PUBLIC_VAPID_KEY ||
            FIREBASE_PUBLIC_VAPID_KEY,
    };
    if (Object.values(firebaseConfig).every(function (entry) { return entry; })) {
        console.log("\nLoading firebase assets...");
        var firebaseMessagingSw = "importScripts(\"/firebase-app.js\");importScripts(\"/firebase-messaging.js\");firebase.initializeApp(" + JSON.stringify(firebaseConfig) + ");const messaging = firebase.messaging();";
        var firebaseVersion = packageJson.dependencies.firebase
            .replace("^", "")
            .replace("~", "");
        var firebaseMessagingFile_1 = fs.createWriteStream(path.join(outPath, "firebase-messaging.js"));
        var firebaseAppFile_1 = fs.createWriteStream(path.join(outPath, "firebase-app.js"));
        console.log("\nUsing firebase version " + firebaseVersion);
        console.log("\nWriting to " + outPath + "/firebase-messaging.js...");
        https.get("https://www.gstatic.com/firebasejs/" + firebaseVersion + "/firebase-messaging.js", function (response) {
            response.pipe(firebaseMessagingFile_1);
        });
        console.log("Writing to " + outPath + "/firebase-app.js...");
        https.get("https://www.gstatic.com/firebasejs/" + firebaseVersion + "/firebase-app.js", function (response) {
            response.pipe(firebaseAppFile_1);
        });
        console.log("\nWriting to " + outPath + "/firebase-messaging-sw.js...");
        fs.writeFileSync(path.join(outPath, "firebase-messaging-sw.js"), firebaseMessagingSw);
        console.log("\nFirebase load success!");
    }
}
exports.loadFirebase = loadFirebase;
//# sourceMappingURL=load-firebase.js.map