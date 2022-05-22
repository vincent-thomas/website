import Image from "next/image";
import { HoverBackground } from "core/ui/hover-background/hover-background";
import { FC } from "react";
import { ButtonNotStyled } from "@/core/components/button/not-styled";

export const SocialTwitterIcon: FC<{ type: "white" | "black" }> = ({
  type,
}) => {
  return (
    <ButtonNotStyled
      onClick={() => window.open("https://twitter.com/Vincent05672456")}
    >
      <HoverBackground
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75, duration: 0.25 }}
        style={{ display: "grid", placeItems: "center" }}
      >
        {type === "white" ? (
          <Image src='/twitter_logo.svg' alt='' width='30' height='30' />
        ) : (
          <Image src='/twitter-black_logo.svg' alt='' width='30' height='30' />
        )}
      </HoverBackground>
    </ButtonNotStyled>
  );
};
