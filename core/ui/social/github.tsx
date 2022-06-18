import { HoverBackground } from "core/ui/hover-background/hover-background";
import { FC } from "react";
import { ButtonNotStyled } from "core/components/button/not-styled";

export const SocialGithubIcon: FC<{ type: "white" | "black" }> = ({ type }) => {
  return (
    <ButtonNotStyled onClick={() => window.open("//link.v-thomas.me/github")}>
      <HoverBackground
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75, duration: 0.25 }}
        style={{ display: "grid", placeItems: "center" }}
      >
        <img src={`/github-logo_${type}.svg`} alt='' width='30' height='30' />
      </HoverBackground>
    </ButtonNotStyled>
  );
};
