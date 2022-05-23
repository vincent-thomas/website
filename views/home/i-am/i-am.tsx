import { TitleInfo, TitleNormal } from "@/core/components";
import S from "./i-am.module.scss";

const IAm = () => {
  return (
    <div className={S["wrapper"]}>
      <div className={S["container"]} id='who-iam' data-aos='fade-right'>
        <TitleInfo className={S["to-right"]}>Who I am</TitleInfo>
        <TitleNormal size='big' className={S["title"]}>
          I am a{" "}
          <div className={S["age-container"]}>
            <span>15 year old</span>
            <img src='/text-underline.svg' alt='' className={S["underline"]} />
          </div>{" "}
          Swedish <span style={{ lineBreak: "revert" }}>web-developer</span> who
          likes to learn new things.
        </TitleNormal>
      </div>
      <div className={`${S["section"]} ${S["revert"]}`} id='intrests'>
        <img
          src='/feva.svg'
          alt=''
          className={S["image"]}
          id='sail-image'
          data-aos='fade-up'
        />

        <div data-aos='fade-left'>
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
      <div className={S["section"]} id='where'>
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
