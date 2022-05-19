import { TextNormal } from "@core/components/text/normal";
import { TitleNormal } from "@core/components/title/normal";
import Image from "next/image";
import { Punctuation } from "@core/ui/punctuation";
import S from "./experience.module.scss";
import { ButtonPrimary, ButtonSecondary } from "@core/components";

export const Experience = () => {
  return (
    <div className={S["wrapper"]}>
      <div className={S["container"]}>
        <Punctuation text='Experience' />

        <div className={S["card-container"]}>
          <div className={`${S["images-container"]} ${S["js-ts-image"]}`}>
            <div className={S["js-image-wrapper"]}>
              <Image
                src={"/js_logo.svg"}
                alt=''
                width='200'
                height='200'
                className={S["js-image"]}
              />
            </div>
            <div className={S["ts-image-wrapper"]}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image
                src='/ts_logo.svg'
                height='200'
                width='200'
                alt=''
                className={S["ts-image"]}
              />
            </div>
          </div>

          <div className={S["desc"]}>
            <TitleNormal>JavaScript/TypeScript</TitleNormal>
            <TextNormal restrictWidth>
              I like working with js/ts. Javascript (in my opinion) is too
              loosely typed, so i don&apos;t use it that much, instead
              typescript is my go to language
            </TextNormal>
            <div className={S["button-container"]}>
              <ButtonPrimary>Typescript</ButtonPrimary>
              <ButtonSecondary>Javascript</ButtonSecondary>
            </div>
          </div>
        </div>
        <div className={`${S["card-container"]} ${S["invert"]}`}>
          <div className={S["desc"]}>
            <TitleNormal>React / Angular</TitleNormal>
            <TextNormal restrictWidth>
              React with it&apos;s functional approach to component-based
              web-development and angular with more places to hook your logic
              than i&apos;ve ever seen. I&apos;ve used both in my projects. Both
              has its strengths and weaknesses.
            </TextNormal>
            <div className={S["button-container"]}>
              <ButtonPrimary>React</ButtonPrimary>
              <ButtonSecondary>Angular</ButtonSecondary>
            </div>
          </div>
          <div className={S["images-container"]}>
            <div
              className={`${S["image-wrapper"]} ${S["margin-down"]} ${S["react-angular-container"]}`}
            >
              <div className={S["react-image-wrapper"]}>
                <Image
                  src={"/react_logo.svg"}
                  alt=''
                  width='225'
                  height='225'
                  className={S["react-image"]}
                />
              </div>
              <Image
                src={"/angular_logo.svg"}
                alt=''
                width='250'
                height='250'
                className={S["angular-image"]}
              />
            </div>
          </div>
        </div>
        <div className={S["card-container"]}>
          <div className={S["image-wrapper"]}>
            <Image src={"/nestjs_logo.svg"} alt='' width='225' height='225' />
          </div>
          <div className={S["desc"]}>
            <TitleNormal>Nestjs</TitleNormal>
            <TextNormal restrictWidth>
              Nestjs is a tool for building scalable backends with node. I used
              it for building projects and had a great time using it. Although
              the project is kind of stale right now.
            </TextNormal>
            <div className={S["button-container"]}>
              <ButtonSecondary>Nestjs</ButtonSecondary>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
