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
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@24,400,0,0" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@200..900&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap" rel="stylesheet"/>
        {/* <link href="https://fonts.googleapis.com/css2?family=Gelasio:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet"/> */}
        <script src="/plms.js" async/>
      </Head>
      <body className="bg-color-bg1 element-class">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}