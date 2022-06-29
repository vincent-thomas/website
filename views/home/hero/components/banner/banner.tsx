import { Link } from "@core/components";
import { SocialGithubIcon, SocialTwitterIcon, HoverBackground } from "@core/ui";
import { SHORTS } from "core/utils";
import S from "./banner.module.scss";

export const Banner = () => {
  return (
    <div className={S["wrapper"]} data-test='social-bar'>
      <div className={S["container"]}>
        <div className={S["left"]}>
          <Link to='#who-iam' type='not-styled'>
            <HoverBackground>Who I Am</HoverBackground>
          </Link>
          <Link to='#intrests' type='not-styled'>
            <HoverBackground>Interests</HoverBackground>
          </Link>
          <Link to='#' type='not-styled'>
            <HoverBackground>Projects</HoverBackground>
          </Link>
          <Link to={SHORTS.EMAIL_ME_LINK} type='not-styled'>
            <HoverBackground>Email</HoverBackground>
          </Link>
        </div>
        <div className={S["left"]}>
          <SocialTwitterIcon type='black' />
          <SocialGithubIcon type='black' />
        </div>
      </div>
    </div>
  );
};
