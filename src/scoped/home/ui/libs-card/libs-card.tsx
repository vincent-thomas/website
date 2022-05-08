import { Card, Col, Text, Title } from "@v-thomas/core-ui";
import { Variants } from "framer-motion";
import { useState } from "react";
import { LibsModal } from "./libs-modal";

export const LibsCard = ({ delay }: { delay: number }) => {
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
        duration: 0.5,
        delay: delay || 0,
        ease: "backIn",
      },
    },
  };

  return (
    <Card
      variants={variant}
      onClick={() => setIsOpen(true)}
      animate="show"
      initial="hidden"
    >
      <Col gap="0.25">
        <Title>Libraries</Title>
        <Text restrictWidth>
          I have contributed to the npm ecosystem with multiple packages that
          makes general tasks with js/ts much easier and less complicated
        </Text>
      </Col>
      <LibsModal isOpen={isOpen} toggleOff={() => setIsOpen((val) => !val)} />
    </Card>
  );
};
