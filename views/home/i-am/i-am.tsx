import { TitleInfo, TitleNormal } from "@/core/components";
import { Punctuation } from "@/core/ui/punctuation";
import { IAmC } from "./components/i-am/i-am";
import S from "./i-am.module.scss";

export const IAm = () => {
  return (
    <div className={S["wrapper"]} data-test='about-me-wrapper'>
      <div
        className={S["container"]}
        id='who-iam'
        style={{
          zIndex: 1
        }}
        data-test='about-me-container'
      >
        <Punctuation text={"About me"} size='big' data-test='about-me-title' />

        <IAmC />

        <div
          className={` ${S["two-container"]}`}
          id='intrests'
          data-test='about-me-intrests'
        >
          <img src='/feva.svg' alt='' width='300' height='300' />
          <div className={S["revert"]}>
            <TitleInfo>I like to...</TitleInfo>
            <TitleNormal
              size='big'
              className={`${S["max-title-size-more"]} ${S["sailing-text"]}`}
            >
              Code, fiddle with config files, hangout with friends and sail a
              boat called feva.
              <img src='/sail-arrow.svg' alt='' />
            </TitleNormal>
          </div>
        </div>
      </div>
    </div>
  );
};
