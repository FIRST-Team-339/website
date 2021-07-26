import Head from 'next/head';
import Layout from '../Components/Layout.component';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Kilroy 339</title>
        <meta name="description" content="Who's here? Kilroy is here!! We are FIRST Robotics Team 339, located at North Stafford High School, and organized throught the Commonwealth Governor’s School."/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="https://website-339-dev.netlify.app/favicon.ico"/>
        <meta property="twitter:card" content="https://website-339-dev.netlify.app/thumbnail.png"/>
        <meta name="theme-color" content="#fe6624"/>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/3a5e0f4177.js" crossOrigin="anonymous"></script>
        <link type="application/json+oembed" href="/oembed.json"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css"></link>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;