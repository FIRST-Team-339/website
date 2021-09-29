/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import type { AppProps /*, AppContext */ } from "next/app";
import Layout from "../components/layout.component";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Tyra Digital</title>
        {/* <meta
          name="description"
          content="Who's here? Kilroy is here!! 
        
        We are FIRST Robotics Team 339, located at North Stafford High School, and organized throught the Commonwealth Governor’s School."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Kilroy 339" />
        <meta property="og:image" content="https://tyra.digital/favicon.ico" />
        <meta
          property="twitter:image"
          content="https://website-339-dev.netlify.app/favicon.ico"
        />
        <meta
          name="twitter:card"
          content="https://website-339-dev.netlify.app/thumbnail.png"
        />
        <meta name="theme-color" content="#fe6624" /> */}
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://kit.fontawesome.com/3a5e0f4177.js"
          crossOrigin="anonymous"
        ></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css"
        ></link>
      </Head>
      <Component {...pageProps} />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.bundle.min.js"></script>
    </Layout>
  );
}
