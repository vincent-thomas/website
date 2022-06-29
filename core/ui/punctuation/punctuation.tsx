import { motion } from "framer-motion";
import { Title } from "@core/components";
import { ReactNode } from "react";

export const Punctuation = ({
  text,
  size = "medium",
  color = "light",
  withTitle = true,
  ...props
}: {
  text: string | ReactNode;
  size: "large" | "medium" | "small" | undefined;
  color?: "light" | "dark";
  withTitle?: boolean;
}) => {
  return (
    <motion.div
      style={{
        alignItems: "center",
        paddingBottom: "1rem",
        gap: "1rem",
        justifyContent: "flex-start",
        position: "relative"
      }}
      {...props}
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
        {withTitle ? (
          <Title style={{ position: "relative" }} size={size} color={color}>
            {text}
          </Title>
        ) : (
          text
        )}
      </motion.div>
    </motion.div>
  );
};
