import type { NextPage } from "next";
import Head from "next/head";
import { AboutMe, ColorLines, ProjectsView, Hero } from "@views/home";

const HomePage: NextPage = () => (
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
    <AboutMe />
    <ColorLines removeBottom />
    <ProjectsView />
  </>
);

export default HomePage;
