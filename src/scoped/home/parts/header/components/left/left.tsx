import { ButtonPrimary } from "@core/components";
import { LinkNotStyled } from "@core/components/link/not-styled";
import { TextNormal } from "@core/components/text/normal";
import { TitleNormal } from "@core/components/title/normal";
import { SocialEmailIcon, SocialGithubIcon } from "@core/ui";
import { Card } from "@core/ui/card/card";
import { Underline } from "@core/ui/underline";
import { SHORTS } from "@core/utils";

import S from "./left.module.scss";

export const Left = () => {
  return (
    <div className={S["left-container"]}>
      <TitleNormal size='big' className={S["title"]}>
        <span className={S["title-small"]}>Hi, I&apos;m</span>
        <Underline>Vincent Thomas</Underline>
        <span className={S["title-small"]}>!</span>
      </TitleNormal>
      <TextNormal>
        I&apos;m an 15 year old guy who loves to code and learn new stuff.
        <br />I make apps that (hopefully) made <b>peoples lives better</b>.
        <br />
        The problem is the general public doesn&apos;t know now they exist
      </TextNormal>
      <div className={S["button-wrapper"]}>
        <Card>
          <div className={S["button-container"]}>
            <LinkNotStyled href={SHORTS.EMAIL_ME_LINK}>
              <ButtonPrimary>Contact Me</ButtonPrimary>
            </LinkNotStyled>
            <SocialGithubIcon />
            <SocialEmailIcon />
          </div>
        </Card>
      </div>
    </div>
  );
};
