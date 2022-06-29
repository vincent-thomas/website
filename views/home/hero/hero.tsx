import { MaxWidthLayout } from "@core/layouts";
import { Button, Link, Title } from "@core/components";
import { Underline } from "@core/ui";
import { Banner } from "./components/banner";
import { Image as MyImg } from "./components/image";
import S from "./hero.module.scss";

export const Hero = () => {
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
              <Link
                type='not-styled'
                to='mailto:vincent.nathan.thomas@gmail.com'
              >
                <Button data-test='button-contact' type='primary'>
                  Contact Me
                </Button>
              </Link>
              <Link type='not-styled' to='#about'>
                <Button data-test='button-about' type='secondary'>
                  About Me
                </Button>
              </Link>
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
