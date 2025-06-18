import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ar" dir="rtl">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicon.ico" />
          <link 
            rel="stylesheet" 
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
            integrity="sha512-5s5hAF9ogbZDzlnJl0SQI+1Ff7yTnLAUcSsEh5e9sa9QjO9mkZu9A+flzr9PYrQd32YCdoEnXm1QyvNGZzg==" 
            crossOrigin="anonymous" 
            referrerPolicy="no-referrer" 
          />
          <style>{`body { margin: 0; }`}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
