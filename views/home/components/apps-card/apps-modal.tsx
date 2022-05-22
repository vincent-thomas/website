import { ButtonNotStyled } from "core/components/button/not-styled";
import { TextNormal } from "core/components/text/normal";
import { TitleNormal } from "core/components/title/normal";
import { Card } from "core/ui/card";
import { Modal } from "@v-thomas/core-ui";
import Image from "next/image";
import { LinkNormal } from "@/core/components";

export const AppsModal = ({
  isOpen,
  toggleOff,
}: {
  isOpen: boolean;
  toggleOff: () => void;
}) => {
  return (
    <Modal isOpen={isOpen}>
      <TitleNormal>Applications</TitleNormal>
      <ButtonNotStyled onClick={toggleOff}>
        <Image
          width='30'
          height='30'
          src='https://assets.v-thomas.me/x-mark.svg'
          alt='Close button'
        />
      </ButtonNotStyled>
      <TextNormal>
        Here are some of the apps that i have made/created
      </TextNormal>

      <Card style={{ cursor: "unset" }}>
        <TitleNormal>MovieReviewer</TitleNormal>
        <LinkNormal href='//link.v-thomas.me/movie' target='_blank'>
          https://movie.v-thomas.me
        </LinkNormal>
      </Card>
    </Modal>
  );
};
