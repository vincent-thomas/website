import { Card, Col, Text, Title } from "@v-thomas/core-ui";
import { Variants } from "framer-motion";
import { useState } from "react";
import { LibsModal } from "./libs-modal";

export const LibsCard = ({ variant }: { variant: Variants }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card variants={variant} onClick={() => setIsOpen(true)}>
        <Col gap="0.25">
          <Title>Libraries</Title>
          <Text restrictWidth>
            I have contributed to the npm ecosystem with multiple packages that
            makes general tasks with js/ts much easier and less complicated
          </Text>
        </Col>
      </Card>
      <LibsModal isOpen={isOpen} toggleOff={() => setIsOpen((val) => !val)} />
    </>
  );
};
