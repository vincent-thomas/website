import { Row } from "@v-thomas/core-ui";
import { motion } from "framer-motion";
import { TitleNormal } from "@/core/components";
import { ReactNode } from "react";

export const Punctuation = ({
  text,
  size = "medium",
  color = "light"
}: {
  text: string | ReactNode;
  size: "big" | "medium" | "small" | undefined;
  color?: "light" | "dark";
}) => {
  return (
    <Row
      style={{
        alignItems: "center",
        paddingBottom: "1rem",
        gap: "1rem",
        justifyContent: "flex-start",
        position: "relative"
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.25 }}
    >
      <motion.div
        style={{
          position: "absolute",
          top: "20%",
          left: "-2.75rem"
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75 }}
      >
        <img src={"dot.svg"} width='40' height='20' alt='' />
      </motion.div>
      <motion.div
        // initial={{ left: "-2rem" }}
        animate={{ left: 0 }}
        transition={{ delay: 0.5, duration: 0.25 }}
      >
        <TitleNormal style={{ position: "relative" }} size={size} color={color}>
          {text}
        </TitleNormal>
      </motion.div>
    </Row>
  );
};
