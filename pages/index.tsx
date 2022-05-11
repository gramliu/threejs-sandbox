import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ThreeJS Sandbox</title>
        <meta name="description" content="ThreeJS Sandbox" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the <a href="https://threejs.org/">three.js</a> sandbox!
        </h1>

        <div className={styles.links}>
          <Link href="/dice" passHref>
            <a className={styles.link}>Dice</a>
          </Link>
          <Link href="/globe" passHref>
            <a className={styles.link}>Globe</a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
