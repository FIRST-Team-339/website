import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Welcome: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Tyra, everything you need!</h1>

        <p className={styles.description}>
          Get started by <Link href="/login">Logging in with Discord</Link>
        </p>

        <div className={styles.grid}>
          <a href="/login" className={styles.widecard}>
            <h2>Login &rarr;</h2>
            <p>Login & Get Started</p>
          </a>

          <a href="/services" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about our services</p>
          </a>

          <a href="/features" className={styles.card}>
            <h2>Features &rarr;</h2>
            <p>View our Vast Ranges of Features and Commands</p>
          </a>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
};

export default Welcome;
