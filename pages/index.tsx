import type { NextPage } from "next";
import Head from "next/head";
import { AboutMe, ProjectsView, Hero } from "@domain/home";
import { Navbar } from "@domain/home/hero/components/navbar";

const HomePage: NextPage = () => (
  <>
    <Head>
      <title>Vincent Thomas</title>
      <meta
        name='description'
        content="Hi! I'm Vincent Thomas, a 15 year old software developer who likes coding. This is my page. Pay a visit?"
      />
    </Head>
    <Navbar></Navbar>
    <Hero />
    <AboutMe />
    <div
      className={`h-[140px] bg-accent outline outline-y-2 outline-text`}
    ></div>
  </>
);

export default HomePage;
