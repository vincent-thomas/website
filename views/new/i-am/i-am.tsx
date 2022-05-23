import { TitleInfo, TitleNormal } from "@/core/components";
import S from "./i-am.module.scss";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export const IAm = () => {
  useEffect(() => {
    AOS.init({
      offset: 450,
      delay: 50
    });
    AOS.refresh();
  }, []);
  return (
    <div className={S["wrapper"]}>
      <div className={S["container"]} id='who-iam' data-aos='fade-right'>
        <TitleInfo className={S["to-right"]}>Who I am</TitleInfo>
        <TitleNormal size='big' className={S["title"]}>
          I am a{" "}
          <div className={S["age-container"]}>
            <span>15 year old</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src='/text-underline.svg' alt='' className={S["underline"]} />
          </div>{" "}
          Swedish <span style={{ lineBreak: "revert" }}>web-developer</span> who
          likes to learn new things.
        </TitleNormal>
      </div>{" "}
      <div
        className={`${S["container-2"]} ${S["revert"]}`}
        id='intrests'
        data-aos='fade-left'
      >
        <img src='/feva.svg' alt='' className={S["image"]} id='sail-image' />
        <div>
          <TitleInfo className={S["to-left"]}>I like to</TitleInfo>
          <TitleNormal
            size='big'
            className={`${S["title"]} ${S["title-to-left"]}`}
          >
            I like to be with friends, sail and code. My weapon of choice is
            typescript.
          </TitleNormal>
        </div>
      </div>
      <div className={S["container-2"]} id='where'>
        <img src='/home_black.svg' alt='' data-aos='fade-up' />
        <div data-aos='fade-left'>
          <TitleInfo className={S["to-right"]}>Up-growth</TitleInfo>
          <TitleNormal size='big' className={`${S["title"]}`}>
            Vincent grew up and is currently living in Göteborg, Sweden.
          </TitleNormal>
        </div>
      </div>
    </div>
  );
};

export default IAm;
