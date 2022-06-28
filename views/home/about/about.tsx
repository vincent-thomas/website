import { LinkNotStyled, Title } from "@/core/components";
import { MaxWidthLayout } from "@/core/layouts/max-width/max-width.layout";
import { Punctuation } from "@/core/ui/punctuation";
import { Texting } from "@/core/ui/texting";
import { IAmC } from "./components/i-am/i-am";
import S from "./about.module.scss";

export const AboutMe = () => {
  return (
    <MaxWidthLayout>
      <div
        className={S["wrapper"]}
        data-test='about-me-wrapper'
        id='about'
        style={{ scrollMarginTop: "calc(var(--space) * 1.5)" }}
      >
        <div
          className={S["container"]}
          id='who-iam'
          style={{
            zIndex: 1
          }}
          data-test='about-me-container'
        >
          <Punctuation
            text={
              <LinkNotStyled href='#about'>
                <Texting>
                  <Title size='large'>About me</Title>
                </Texting>
              </LinkNotStyled>
            }
            size='large'
            withTitle
            data-test='about-me-title'
          />

          <IAmC />

          <div
            className={` ${S["two-container"]}`}
            id='intrests'
            data-test='about-me-intrests'
          >
            <img src='/feva.svg' alt='' width='300' height='300' />
            <div className={S["revert"]}>
              <Title size='info'>I like to...</Title>
              <Title
                size='large'
                className={`${S["max-title-size-more"]} ${S["sailing-text"]}`}
              >
                Code, fiddle with config files, hangout with friends and sail a
                boat called feva.
                <img src='/sail-arrow.svg' alt='' />
              </Title>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthLayout>
  );
};
