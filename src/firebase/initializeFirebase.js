import { initializeApp } from "firebase/app";

export const firebaseSoundDiffuser = initializeApp(
  {
    apiKey: process.env.SOUNDDIFFUSER_API_KEY,
    authDomain: process.env.SOUNDDIFFUSER_AUTH_DOMAIN,
    projectId: process.env.SOUNDDIFFUSER_PROJECT_ID,
    storageBucket: process.env.SOUNDDIFFUSER_STORAGE_BUCKET,
    messagingSenderId: process.env.SOUNDDIFFUSER_MESSAGING_SENDER_ID,
    appId: process.env.SOUNDDIFFUSER_APP_ID,
  },
  "soundDiffuser"
);
