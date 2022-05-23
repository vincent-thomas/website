import { Row } from "@v-thomas/core-ui";
import { motion } from "framer-motion";
import { TitleNormal } from "@/core/components";

export const Punctuation = ({ text }: { text: string }) => {
  return (
    <Row
      style={{
        alignItems: "center",
        paddingBottom: "1rem",
        gap: "1rem",
        justifyContent: "flex-start",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.25 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75 }}
      >
        <img src={"dot.svg"} width='15' height='15' alt='' />
      </motion.div>
      <motion.div
        initial={{ left: "-2rem" }}
        animate={{ left: 0 }}
        transition={{ delay: 0.5, duration: 0.25 }}
      >
        <TitleNormal style={{ position: "relative" }}>{text}</TitleNormal>
      </motion.div>
    </Row>
  );
};
