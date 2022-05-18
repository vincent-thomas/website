import {
  Avatar,
  Button,
  ButtonContainer,
  Link,
  Row,
  Title,
} from "@v-thomas/core-ui";
import styled from "styled-components";
import { NavbarContainer } from "./navbar.styles";

const Center = styled(Row)`
  align-items: center;
`;

const BetterLink = styled(Link)`
  padding: 0.5rem;
`;

export const SharedNavbar = () => {
  return (
    <NavbarContainer gap='auto'>
      <Avatar avatar='/icon.png'></Avatar>
      <Title size='1.7'>Vincent Thomas</Title>
      <ButtonContainer style={{ gap: "2rem !important" }}>
        <BetterLink external to='mailto:vincent.nathan.thomas@gmail.com'>
          Get in touch
        </BetterLink>
        <Button variant='outlined'>About</Button>
        <Button variant='contained'>hello</Button>
      </ButtonContainer>
    </NavbarContainer>
  );
};
