import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Noto_Sans as Font } from "next/font/google";

const font = Font({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <div className={`${font.className}`}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  </>)
}
