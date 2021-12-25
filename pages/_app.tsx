import "../styles/index.css";
import Layout from "../components/layout.component";
import type { AppProps } from "next/app";
import path from "path"
import fs from "fs"
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Kilroy 339</title>
        <meta name="description" content="Kilroy Robotics Team 339"/>
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content="Kilroy 339"/>
        <meta property="og:image" content="/assets/img/favicon.ico"/>
        <meta property="twitter:image" content="/assets/img/favicon.ico"/>
        <meta name="twitter:card" content="/assets/img/thumbnail.png"/>
        <meta name="theme-color" content="#fe6624"/>
        <link rel="icon" href="/assets/img/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

/*export async function getStaticProps() {
  const filenames = fs.readdirSync("./public/text")

  const texts = {}

  filenames.map(filename => {
    const filePath = path.join("./public/text", filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')

    // Generally you would parse/transform the contents
    // For example you can transform markdown to HTML here

    console.log(filename)
    console.log(fileContents)
    texts[`${filename}`] = fileContents
    return;
  })

  return {
    props: {
      texts,
    },
  }
}*/


export default MyApp;
