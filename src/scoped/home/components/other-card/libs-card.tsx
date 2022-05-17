import { Card, Col, Link, Text, Title } from "@v-thomas/core-ui";
import { Variants } from "framer-motion";
import { useState } from "react";
import { LibsModal } from "./libs-modal";

export const OtherCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const variant: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25,
        delay: 0.25,
        ease: "backIn",
      },
    },
  };
  return (
    <>
      <Card
        variants={variant}
        onClick={() => setIsOpen(true)}
        animate="show"
        initial="hidden"
      >
        <Col gap="0.25">
          <Title>Other tools</Title>
          <Text>
            Other projects that I have made/contributed to. I also seek new
            projects I can contribute to. If you&apos;ve seen one email me{" "}
            <Link external to="mailto:vincent.nathan.thomas@gmail.com">
              here
            </Link>
          </Text>
        </Col>
      </Card>
      <LibsModal isOpen={isOpen} toggleOff={() => setIsOpen((val) => !val)} />
    </>
  );
};
