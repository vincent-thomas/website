import { Row, Title } from "@v-thomas/core-ui";
import { motion } from "framer-motion";
import Image from "next/image";
import SVGDot from "../../../../assets/dot.svg";
const Dot = () => <Image src={SVGDot} width="15" height="15" alt="" />;

export const Punctuation = ({ text }: { text: string }) => {
  return (
    <Row gap="1" style={{ alignItems: "center", marginBottom: "1rem" }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Dot />
      </motion.div>
      <Title
        style={{ position: "relative" }}
        initial={{ left: "-2rem" }}
        animate={{ left: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        {text}
      </Title>
    </Row>
  );
};
