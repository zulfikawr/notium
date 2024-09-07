import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

export default defineNuxtPlugin(async (_nuxtApp) => {
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "notiums.firebaseapp.com",
    projectId: "notiums",
    storageBucket: "notiums.appspot.com",
    messagingSenderId: "302452734189",
    appId: "1:302452734189:web:1e93b4ebd63965a710b4e4",
    measurementId: "G-343TS1ZGNB"
  }; 

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  return {
    provide: {
      auth: auth
    }
  };
});
