import { HoverBackground } from "@core/ui";
import { FC } from "react";
import { Link } from "@core/components";

export const SocialTwitterIcon: FC<{ type: "white" | "black" }> = ({
  type
}) => {
  return (
    <Link to='https://twitter.com/Vincent05672456' type='not-styled'>
      <HoverBackground
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75, duration: 0.25 }}
        style={{ display: "grid", placeItems: "center" }}
      >
        {type === "white" ? (
          <img
            src='/twitter_logo.svg'
            alt=''
            width='30'
            height='30'
            className='no-shadow'
          />
        ) : (
          <img
            src='/twitter-black_logo.svg'
            alt=''
            width='30'
            height='30'
            className='no-shadow'
          />
        )}
      </HoverBackground>
    </Link>
  );
};
