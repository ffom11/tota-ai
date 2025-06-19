import Head from 'next/head';
import { useEffect } from 'react';
import { initFirebase } from '../firebase';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Initialize Firebase
    const { app, analytics } = initFirebase();
    
    // Log Firebase initialization
    if (app) {
      console.log('Firebase initialized');
      if (analytics) {
        console.log('Analytics initialized');
      }
    }

    // Cleanup on unmount
    return () => {
      // Add any cleanup code here if needed
    };
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Tota AI - منصة تعليمية تفاعلية للطلاب" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

// Enable React.StrictMode in development
export function reportWebVitals(metric) {
  // You can log performance metrics here
  // console.log(metric);
}
