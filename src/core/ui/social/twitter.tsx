import { Button } from "@v-thomas/core-ui";
import Image from "next/image";
import { HoverBackground } from "../../../shared/ui/hover-background/hover-background";

export const SocialTwitterIcon = () => {
  return (
    <Button
      noStyle
      onClick={() => window.open("https://twitter.com/Vincent05672456")}
    >
      <HoverBackground
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75, duration: 0.25 }}
        style={{ display: "grid", placeItems: "center" }}
      >
        <Image src='/twitter_logo.svg' alt='' width='30' height='30' />
      </HoverBackground>
    </Button>
  );
};
