import { Card, Col, Text, Title } from "@v-thomas/core-ui";
import { Variants } from "framer-motion";
import { useState } from "react";
import { AppsModal } from "./apps-modal";

export const AppsCard = ({ delay }: { delay: number }) => {
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
        delay: delay,
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
        <Title>Apps</Title>
        <Text restrictWidth>
          I have made web-applications with different variations of use cases,
          including movies. I have more to do here.
        </Text>
      </Col>
      <AppsModal
        isOpen={isOpen}
        toggleOff={() => {
          setIsOpen((val) => !val);
        }}
      />
    </Card>
  );
};
