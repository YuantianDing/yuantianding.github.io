import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"/>
        <link rel="icon" type="image/x-icon" href="/images/avatar.png"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous'/>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet"/>
        <script type="text/javascript" id="clustrmaps" src="//clustrmaps.com/map_v2.js?d=s3lps_XzFCZn2PWG8Lb_JVKKZfLA2orfV4Ael_ii7Zc&cl=ffffff&w=a" async/>
        <script src="/plms.js" async/>
      </Head>
      <body className="bg-color element-class">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}