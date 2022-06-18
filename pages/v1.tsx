import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../views/v1/parts/header";
import { Features } from "../views/v1/parts/features";
import { Experience } from "../views/v1/parts/experience/experience";

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
