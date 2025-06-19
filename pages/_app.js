import Head from 'next/head';
import { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAaswJ9ynTVjDZ5VqdTU7kCF-v8Dqtr6RE",
  authDomain: "tota-97fb5.firebaseapp.com",
  projectId: "tota-97fb5",
  storageBucket: "tota-97fb5.firebasestorage.app",
  messagingSenderId: "612923192933",
  appId: "1:612923192933:web:1f646f3ab61fb3ffc9788c",
  measurementId: "G-7BZKG6JW33"
};

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
    }
  }, []);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
