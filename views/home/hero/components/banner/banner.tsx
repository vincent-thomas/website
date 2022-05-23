import { LinkNormal } from "@/core/components";
import { SocialGithubIcon, SocialTwitterIcon } from "@/core/ui";
import { HoverBackground } from "@/core/ui/hover-background/hover-background";
import { SHORTS } from "core/utils";
import S from "./banner.module.scss";

export const Banner = () => {
  return (
    <div className={S["wrapper"]}>
      <div className={S["container"]}>
        <div className={S["left"]}>
          <LinkNormal href='#who-iam'>
            <HoverBackground>Who I Am</HoverBackground>
          </LinkNormal>
          <LinkNormal href='#intrests'>
            <HoverBackground>Interests</HoverBackground>
          </LinkNormal>
          <LinkNormal href='#'>
            <HoverBackground>Projects</HoverBackground>
          </LinkNormal>
          <LinkNormal href={SHORTS.EMAIL_ME_LINK}>
            <HoverBackground>Email</HoverBackground>
          </LinkNormal>
        </div>
        <div className={S["left"]}>
          <SocialTwitterIcon type='black' />
          <SocialGithubIcon type='black' />
        </div>
      </div>
    </div>
  );
};
