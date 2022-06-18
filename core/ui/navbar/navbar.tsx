import { LinkNormal } from "@/core/components";
import { Avatar, ButtonContainer } from "@v-thomas/core-ui";
import { NavbarContainer } from "./navbar.styles";

export const SharedNavbar = () => {
  return (
    <NavbarContainer gap='auto'>
      <Avatar avatar='/icon.png'></Avatar>
      <ButtonContainer style={{ gap: "2rem !important" }}>
        <LinkNormal href='mailto:vincent.nathan.thomas@gmail.com'>
          Get in touch
        </LinkNormal>
     </ButtonContainer>
    </NavbarContainer>
  );
};
