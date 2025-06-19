import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAaswJ9ynTVjDZ5VqdTU7kCF-v8Dqtr6RE",
  authDomain: "tota-97fb5.firebaseapp.com",
  projectId: "tota-97fb5",
  storageBucket: "tota-97fb5.firebasestorage.app",
  messagingSenderId: "612923192933",
  appId: "1:612923192933:web:1f646f3ab61fb3ffc9788c",
  measurementId: "G-7BZKG6JW33"
};

// Initialize Firebase
const initFirebase = () => {
  // Skip if running on server
  if (typeof window === 'undefined') {
    return { app: null, analytics: null };
  }

  // Initialize only once
  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  let analytics = null;

  // Initialize Analytics if supported
  isSupported()
    .then((yes) => {
      if (yes) {
        analytics = getAnalytics(app);
      }
    })
    .catch((error) => {
      console.error('Firebase Analytics initialization error:', error);
    });

  return { app, analytics };
};

export { initFirebase };
