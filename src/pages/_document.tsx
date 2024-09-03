import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="keywords" content="Kilroy,Robotics,FIRST,FIRST™️,SCPS,First Robotics,Stafford,FRC" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Kilroy Robotics" />
        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
        <link rel="icon" type="image/x-icon" href="/assets/img/kilroy_transparent.png" />
        <meta name="theme-color" content="#e87533" />
      </Head>
      <body className="w-full min-h-dvh">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
