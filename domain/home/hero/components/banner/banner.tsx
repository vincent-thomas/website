import { useLang } from "@langs";
import { Link } from "lib/components";
import { SocialGithubIcon, SocialTwitterIcon, HoverBackground } from "lib/ui";
import { SHORTS } from "lib/utils";
import S from "./banner.module.scss";

export const Banner = () => {
  const [langs] = useLang();
  return (
    <div className={S["wrapper"]} data-test='social-bar'>
      <div className={S["container"]}>
        <div className={S["left"]}>
          <Link to='#who-iam' type='not-styled'>
            <HoverBackground>{langs.whoAmI}</HoverBackground>
          </Link>
          <Link to='#intrests' type='not-styled'>
            <HoverBackground>{langs.interests}</HoverBackground>
          </Link>
          <Link to='#' type='not-styled'>
            <HoverBackground>{langs.projects}</HoverBackground>
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
