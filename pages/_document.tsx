import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='shortcut icon' href='/favicon.png' />
        <link
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
          rel='stylesheet'
        />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src='https://unpkg.com/kursor' />
      </Head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `new kursor({ type: 1, removeDefaultCursor: true });`
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
