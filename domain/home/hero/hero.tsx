import { MaxWidthLayout } from "lib/layouts";
import { Button, Link, Title } from "lib/components";
import { Underline } from "lib/ui";
import { Banner } from "./components/banner";
import { Image as MyImg } from "./components/image";
import S from "./hero.module.scss";
import { InfoTitle } from "lib/components/info-title/info-title";
import { useLang } from "@langs";

export const Hero = () => {
  const [langs] = useLang();
  return (
    <>
      <MaxWidthLayout>
        <div className='flex lg:flex-row flex-col-reverse gap-10 items-center lg:justify-between py-20'>
          <div className='text-center lg:text-left'>
            <InfoTitle>{langs.greeting}!</InfoTitle>
            <Title
              size='large'
              data-test='hero-title'
              className='max-w-title-width'
            >
              {langs.iAm} <Underline>Vincent Thomas</Underline>
              och {langs.heroTitleInfo}
            </Title>
            <div className='flex gap-4 mt-4 justify-center lg:justify-start'>
              <Link
                type='not-styled'
                to='mailto:vincent.nathan.thomas@gmail.com'
              >
                <Button data-test='button-contact' type='primary'>
                  {langs.contactMe}
                </Button>
              </Link>
              <Link type='not-styled' to='#about'>
                <Button data-test='button-about' type='secondary'>
                  {langs.aboutMe}
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
