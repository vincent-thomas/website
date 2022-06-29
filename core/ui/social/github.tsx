import { HoverBackground } from "@core/ui";
import { FC } from "react";
import { Link } from "@core/components";

export const SocialGithubIcon: FC<{ type: "white" | "black" }> = ({ type }) => {
  return (
    <Link to='//link.v-thomas.me/github' type='not-styled' external>
      <HoverBackground
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75, duration: 0.25 }}
        style={{ display: "grid", placeItems: "center" }}
      >
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
