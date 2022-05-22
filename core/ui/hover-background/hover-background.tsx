import { motion } from "framer-motion";
import styled from "styled-components";

export const HoverBackground = styled(motion.div)`
  background-color: transparent;
  padding: 0.75rem 0.75rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    transition: background-color 0.2s ease-in-out;

    background-color: var(--clr-background-accent);
  }
`;
