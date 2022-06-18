import { TitleInfo, TitleNormal } from "@/core/components";
import { Punctuation } from "@/core/ui/punctuation";
import { IAmC } from "./components/i-am/i-am";
import S from "./i-am.module.scss";

export const IAm = () => {
  return (
    <div className={S["wrapper"]}>
      <div
        className={S["container"]}
        id='who-iam'
        style={{
          zIndex: 1
        }}
      >
        <Punctuation text={"About me"} size='big' />

        <IAmC />

        <div className={`${S["revert"]} ${S["two-container"]}`} id='intrests'>
          <img src='/feva.svg' alt='' width='300' height='300' />
          <div>
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
