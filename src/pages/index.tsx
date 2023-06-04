import Head from "next/head";
import Image from "next/image";
import { ProductList } from "../components/ProductList";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

// Todo
/*
 */

export default function Home() {
  return (
    <>
      <Head>
        <title>Avanti</title>
        <meta name="description" content="Avanti e-commerce application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div>
          <h1>Our Products</h1>
          <ProductList />
        </div>
      </main>
    </>
  );
}
