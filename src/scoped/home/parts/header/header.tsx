import { ButtonPrimary } from "@core/components";
import { LinkNotStyled } from "@core/components/link/not-styled";
import { TextNormal } from "@core/components/text/normal";
import { TitleNormal } from "@core/components/title/normal";
import { SocialEmailIcon, SocialGithubIcon } from "@core/ui";
import { Underline } from "@core/ui/underline";
import { SHORTS } from "@core/utils";
import { Card } from "@v-thomas/core-ui";
import { ProfileImage } from "scoped/home/components/profile-image/profile-image";
import { Left } from "./components/left/left";
import S from "./header.module.scss";

export const Header = () => {
  return (
    <div className={S["header-wrapper"]}>
      <Left />
      <ProfileImage />
    </div>
  );
};
