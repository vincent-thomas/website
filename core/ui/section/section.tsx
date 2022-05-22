import { Col } from "@v-thomas/core-ui";
import styled from "styled-components";

interface SectionProps {
  top?: boolean;
  bottom?: boolean;
}

export const Section = styled(Col)<SectionProps>`
  margin-top: ${({ top = true }) => (top ? "15rem" : "0")};
  margin-bottom: ${({ bottom = true }) => (bottom ? "15rem" : "0")};
`;
