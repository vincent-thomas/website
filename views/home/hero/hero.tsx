import { ButtonPrimary, LinkNotStyled, TitleNormal } from "core/components";
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
            <TitleNormal size='big' className={S["title"]}>
              Hi! I&rsquo;m <Underline>Vincent Thomas</Underline> , You found
              me. I turn food and hard work into websites.
            </TitleNormal>
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

export default Hero;
