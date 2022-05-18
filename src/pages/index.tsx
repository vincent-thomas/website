import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "scoped/home/parts/header";
import { Features } from "scoped/home/parts/features";
import { Experience } from "scoped/home/parts/experience/experience";
import { Footer } from "scoped/home/parts/footer";

const Home: NextPage = () => {
  console.log("landed");
  return (
    <>
      <Head>
        <title>Vincent Thomas</title>
      </Head>
      <Header />
      <Features />
      <Experience />
      <Footer />
    </>
  );
};

export default Home;
