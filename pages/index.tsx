import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { ColorLines } from "views/new/color-lines/color-lines";
import { NewHero } from "views/new/hero/hero";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../views/new/i-am/i-am"),
  {
    ssr: false
  }
);

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
      <NewHero />
      <ColorLines />
      <DynamicComponentWithNoSSR />
      <ColorLines flip />
    </>
  );
};

export default NewHomePage;
