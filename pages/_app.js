import Head from 'next/head';
import { useEffect } from 'react';
import { app, analytics } from '../firebase';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // تهيئة Firebase هنا
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
