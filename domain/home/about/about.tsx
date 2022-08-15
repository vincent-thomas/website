import { Text, Title } from "lib/components";
import { MaxWidthLayout } from "lib/layouts";
import { IAmC } from "./components/i-am/i-am";
import S from "./about.module.scss";

export const AboutMe = () => {
  return (
    <MaxWidthLayout>
      <div className={S["wrapper"]} data-test='about-me-wrapper' id='about'>
        <div
          className={`${S["container"]} py-20`}
          id='who-iam'
          style={{
            zIndex: 1
          }}
          data-test='about-me-container'
        >
          {/* <Punctuation
            text={ */}
          {/* <Link to='#about' type='not-styled'> */}
          {/* <Texting> */}

          {/* </Texting> */}
          {/* </Link> */}
          {/* }
            size='large'
            withTitle
            data-test='about-me-title'
          /> */}

          <IAmC />

          <div
            className={` ${S["two-container"]}`}
            id='intrests'
            data-test='about-me-intrests'
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <img src='/feva.svg' alt='' width='300' height='300' />
              <Text>(Not me tho...)</Text>
            </div>
            <div className={S["revert"]}>
              <Title size='info'>I like to...</Title>
              <Title
                size='large'
                className={`${S["max-title-size-more"]} ${S["sailing-text"]}`}
              >
                Code, fiddle with config files, hangout with friends and sail a
                boat called feva.
                <img src='/sail-arrow.svg' alt='' className='no-shadow' />
              </Title>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthLayout>
  );
};
