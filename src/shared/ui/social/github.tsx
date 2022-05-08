import { Button } from "@v-thomas/core-ui";
import Image from "next/image";
import { HoverBackground } from "../hover-background/hover-background";

export const SocialGithubIcon = () => {
  return (
    <Button noStyle onClick={() => window.open("//link.v-thomas.me/github")}>
      <HoverBackground
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{ display: "grid", placeItems: "center" }}
      >
        <Image src="/github_light.png" alt="" width="30" height="30" />
      </HoverBackground>
    </Button>
  );
};
