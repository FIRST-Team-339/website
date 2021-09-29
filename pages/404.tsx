import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Error.module.css";

const Err404: NextPage = () => {
  return (
    <div className={styles.error}>
      <h1>404</h1>
      <div className={styles.errorbox}>
        <h2 className={styles.errorh2}>
          Page Not Found <strong>:/</strong>
        </h2>
        <h3 className={styles.errorlnk}>
          <Link href="/">Go Home</Link>
        </h3>
      </div>
    </div>
  );
};

export default Err404;
