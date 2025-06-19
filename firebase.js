import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAaswJ9ynTVjDZ5VqdTU7kCF-v8Dqtr6RE",
  authDomain: "tota-97fb5.firebaseapp.com",
  projectId: "tota-97fb5",
  storageBucket: "tota-97fb5.firebasestorage.app",
  messagingSenderId: "612923192933",
  appId: "1:612923192933:web:1f646f3ab61fb3ffc9788c",
  measurementId: "G-7BZKG6JW33"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
