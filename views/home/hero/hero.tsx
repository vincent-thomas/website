import { MaxWidthLayout } from "@/core/layouts/max-width/max-width.layout";
import { Button, LinkNotStyled, Title } from "core/components";
import { Underline } from "core/ui/underline";
import { Banner } from "./components/banner";
import { Image as MyImg } from "./components/image";
import S from "./hero.module.scss";

const Hero = () => {
  return (
    <>
      <MaxWidthLayout>
        <div className={S["content"]}>
          <div className={S["left-container"]}>
            <Title data-test='hero-title-header' size='info'>
              Hi!
            </Title>
            <Title size='large' className={S["title"]} data-test='hero-title'>
              I&rsquo;m <Underline>Vincent Thomas</Underline> , You found me. I
              turn food and hard work into websites.
            </Title>
            <div className={S["button-container"]}>
              <LinkNotStyled href='mailto:vincent.nathan.thomas@gmail.com'>
                <Button data-test='button-contact' version='primary'>
                  Contact Me
                </Button>
              </LinkNotStyled>
              <LinkNotStyled href='#about'>
                <Button data-test='button-about' version='secondary'>
                  About Me
                </Button>
              </LinkNotStyled>
            </div>
          </div>
          <div className={S["image-wrapper"]}>
            <MyImg data-test='image-me' />
          </div>
        </div>
      </MaxWidthLayout>
      <Banner />
    </>
  );
};

export default Hero;
