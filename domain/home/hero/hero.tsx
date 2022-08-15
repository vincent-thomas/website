import { MaxWidthLayout } from "lib/layouts";
import { Button, Link, Title } from "lib/components";
import { Underline } from "lib/ui";
import { Banner } from "./components/banner";
import { Image as MyImg } from "./components/image";
import S from "./hero.module.scss";
import { InfoTitle } from "lib/components/info-title/info-title";

export const Hero = () => {
  return (
    <>
      <MaxWidthLayout>
        <div className='flex lg:flex-row flex-col-reverse gap-10 items-center lg:justify-between py-20'>
          <div className='text-center lg:text-left'>
            <InfoTitle>Hi!</InfoTitle>
            <Title
              size='large'
              data-test='hero-title'
              className='max-w-title-width'
            >
              I&rsquo;m <Underline>Vincent Thomas</Underline> , You found me. I
              turn food and hard work into websites.
            </Title>
            <div className='flex gap-4 mt-4 justify-center lg:justify-start'>
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
          <div className={`${S["image-wrapper"]} my-auto`}>
            <MyImg data-test='image-me' />
          </div>
        </div>
      </MaxWidthLayout>
      <Banner />
    </>
  );
};
