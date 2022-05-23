import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../views/home/parts/header";
import { Features } from "../views/home/parts/features";
import { Experience } from "../views/home/parts/experience/experience";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vincent Thomas</title>
      </Head>
      <Header />
      <Features />
      <Experience />
    </>
  );
};

export default Home;
