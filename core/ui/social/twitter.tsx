import { HoverBackground } from "core/ui/hover-background/hover-background";
import { FC } from "react";
import { Button } from "@/core/components/button";

export const SocialTwitterIcon: FC<{ type: "white" | "black" }> = ({
  type
}) => {
  return (
    <Button onClick={() => window.open("https://twitter.com/Vincent05672456")}>
      <HoverBackground
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75, duration: 0.25 }}
        style={{ display: "grid", placeItems: "center" }}
      >
        {type === "white" ? (
          <img src='/twitter_logo.svg' alt='' width='30' height='30' />
        ) : (
          <img src='/twitter-black_logo.svg' alt='' width='30' height='30' />
        )}
      </HoverBackground>
    </Button>
  );
};
