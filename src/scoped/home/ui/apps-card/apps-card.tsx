import { Card, Col, Text, Title } from "@v-thomas/core-ui";
import { Variants } from "framer-motion";
import { useState } from "react";
import { AppsModal } from "./apps-modal";

export const AppsCard = ({ variant }: { variant: Variants }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card variants={variant} onClick={() => setIsOpen(true)}>
        <Col gap="0.25">
          <Title>Apps</Title>
          <Text restrictWidth>
            I have made web-applications with different variations of use cases,
            including movies. I have more to do here.
          </Text>
        </Col>
      </Card>
      <AppsModal
        isOpen={isOpen}
        toggleOff={() => void setIsOpen((val) => !val)}
      />
    </>
  );
};
