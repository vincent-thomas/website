import { TextNormal } from "@core/components/text/normal";
import { TitleNormal } from "@core/components/title/normal";
import { Card } from "@core/ui/card";
import { Link } from "@v-thomas/core-ui";
import { Variants } from "framer-motion";
import { useState } from "react";
import { LibsModal } from "./libs-modal";

export const OtherCard = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const variant: Variants = {
  //   hidden: {
  //     opacity: 0,
  //     y: 60,
  //   },
  //   show: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.25,
  //       delay: 0.25,
  //       ease: "backIn",
  //     },
  //   },
  // };
  return (
    <>
      <Card>
        <TitleNormal>Other tools</TitleNormal>
        <TextNormal>
          Other projects that I have made/contributed to. I also seek new
          projects I can contribute to. If you&apos;ve seen one email me{" "}
          <Link external to='mailto:vincent.nathan.thomas@gmail.com'>
            here
          </Link>
        </TextNormal>
      </Card>
    </>
  );
};
