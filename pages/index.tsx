import type { NextPage } from "next";
import Head from "next/head";
import ColorLines from "@/views/home/color-lines";
import Hero from "@/views/home/hero";
import IAm from "@/views/home/i-am";

const NewHomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vincent Thomas</title>
        <meta
          name='description'
          content="Hi! I'm Vincent Thomas, a 15 year old software developer who likes coding. This is my page. Pay a visit?"
        />
      </Head>
      <Hero />
      <ColorLines />
      <IAm />
      <ColorLines flip />
    </>
  );
};

export default NewHomePage;
