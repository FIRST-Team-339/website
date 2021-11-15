import "../styles/index.css";
import Layout from "../components/layout.component";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Tyra Digital</title>
        <meta
          name="description"
          content="Tyra Digital, all the products & services you need!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
