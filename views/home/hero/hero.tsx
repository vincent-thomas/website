import {
  ButtonPrimary,
  ButtonSecondary,
  LinkNotStyled,
  TitleInfo,
  TitleNormal
} from "core/components";
import { Underline } from "core/ui/underline";
import { Banner } from "./components/banner";
import { Image as MyImg } from "./components/image";
import { Wrapper } from "./components/wrapper";
import S from "./hero.module.scss";

const Hero = () => {
  return (
    <>
      <Wrapper>
        <div className={S["content"]}>
          <div className={S["left-container"]}>
            <TitleInfo data-test='hero-title-header'>Hi!</TitleInfo>
            <TitleNormal
              size='big'
              className={S["title"]}
              data-test='hero-title'
            >
              I&rsquo;m <Underline>Vincent Thomas</Underline> , You found me. I
              turn food and hard work into websites.
            </TitleNormal>
            <div className={S["button-container"]}>
              <LinkNotStyled href='mailto:vincent.nathan.thomas@gmail.com'>
                <ButtonPrimary data-test='button-contact'>
                  Contact Me
                </ButtonPrimary>
              </LinkNotStyled>
              <ButtonSecondary data-test='button-about'>
                About Me
              </ButtonSecondary>
            </div>
          </div>
          <div className={S["image-wrapper"]}>
            <MyImg data-test='image-me' />
          </div>
        </div>
      </Wrapper>
      <Banner />
    </>
  );
};

export default Hero;
