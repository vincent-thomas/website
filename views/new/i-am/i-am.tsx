import { LinkNormal, TitleInfo, TitleNormal } from "@/core/components";
import S from "./i-am.module.scss";

export const IAm = () => {
  return (
    <div className={S["wrapper"]}>
      <div className={S["container"]} id='who-iam'>
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
      <div className={S["container"]} id='intrests'>
        <TitleInfo className={S["to-left"]}>I like to</TitleInfo>
        <TitleNormal
          size='big'
          className={`${S["title"]} ${S["title-to-left"]}`}
        >
          I like to code, be with friends and sail a boat called the{" "}
          <LinkNormal href='https://sailboat.guide/rs/feva' target='_blank'>
            feva
          </LinkNormal>
        </TitleNormal>
      </div>
    </div>
  );
};
