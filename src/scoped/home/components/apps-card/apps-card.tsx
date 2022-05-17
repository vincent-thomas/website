import { Button, Card, Col, Text, Title } from "@v-thomas/core-ui";
import { Variants } from "framer-motion";
import { useState } from "react";
import { AppsModal } from "./apps-modal";

export const AppsCard = () => {
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
        animate="show"
        initial="hidden"
        onClick={() => setIsOpen(true)}
      >
        <Col gap="0.25">
          <Title>Apps</Title>
          <Text>
            I have made web-applications with different variations of use cases,
            including movies. I have more to do here.
          </Text>
        </Col>
      </Card>
      <AppsModal isOpen={isOpen} toggleOff={() => setIsOpen(false)} />
    </>
  );
};
