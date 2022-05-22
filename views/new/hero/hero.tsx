import { ButtonPrimary, ButtonSecondary, LinkNotStyled } from "core/components";
import { Underline } from "core/ui/underline";
import { ColorLines } from "../color-lines/color-lines";
import { Banner } from "./components/banner";
import { Image as MyImg } from "./components/image";
import { Wrapper } from "./components/wrapper";

import S from "./hero.module.scss";

export const NewHero = () => {
  return (
    <>
      <Wrapper>
        <div className={S["content"]}>
          <div className={S["left-container"]}>
            <h1 className={S["title"]}>
              I&rsquo;m <Underline>Vincent Thomas</Underline> . You&rsquo;ve
              found me, I turn food and hard work into websites.
            </h1>
            <div className={S["button-container"]}>
              <LinkNotStyled href='mailto:vincent.nathan.thomas@gmail.com'>
                <ButtonPrimary>Contact Me</ButtonPrimary>
              </LinkNotStyled>
            </div>
          </div>
          <div className={S["image-wrapper"]}>
            <MyImg />
          </div>
        </div>
      </Wrapper>
      <Banner />
    </>
  );
};
