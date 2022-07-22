import { HoverBackground } from "@core/ui";
import { FC } from "react";
import { Link } from "@core/components";

export const SocialGithubIcon: FC<{ type: "white" | "black" }> = ({ type }) => {
  return (
    <Link to='//link.v-thomas.me/github' type='not-styled' external>
      <HoverBackground style={{ display: "grid", placeItems: "center" }}>
        <img
          src={`/github-logo_${type}.svg`}
          alt=''
          width='30'
          height='30'
          className='no-shadow'
        />
      </HoverBackground>
    </Link>
  );
};
