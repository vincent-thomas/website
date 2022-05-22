import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../views/home/parts/header";
import { Features } from "../views/home/parts/features";
import { Experience } from "../views/home/parts/experience/experience";
import { Footer } from "../views/home/parts/footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vincent Thomas</title>
      </Head>
      <Header />
      <Features />
      <Experience />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
