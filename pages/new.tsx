import { IAm } from "@/views/new/i-am";
import type { NextPage } from "next";
import { ColorLines } from "views/new/color-lines/color-lines";
import { NewHero } from "views/new/hero/hero";
// @ts-ignore
import Kursor from "kursor";
import { useEffect } from "react";

const NewHomePage: NextPage = () => {
  return (
    <>
      <NewHero />
      <ColorLines />
      <IAm />
    </>
  );
};

export default NewHomePage;
