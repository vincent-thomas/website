import { ButtonNotStyled } from "@core/components/button/not-styled";
import { TextNormal } from "@core/components/text/normal";
import { TitleNormal } from "@core/components/title/normal";
import { Card, Link, Modal } from "@v-thomas/core-ui";
import Image from "next/image";

export const LibsModal = ({
  isOpen,
  toggleOff,
}: {
  isOpen: boolean;
  toggleOff: () => void;
}) => {
  return (
    <Modal isOpen={isOpen} gap='1' width='30'>
      <TitleNormal>Libraries</TitleNormal>
      <ButtonNotStyled onClick={toggleOff}>
        <Image
          width='30'
          height='30'
          src='https://assets.v-thomas.me/x-mark.svg'
          alt='Close button'
        />
      </ButtonNotStyled>
      <TextNormal>
        These libraries are created to help developers (and me)
        <br />
        to create better websites, easier
      </TextNormal>
      <Card style={{ cursor: "unset" }}>
        <TitleNormal>@v-thomas/core-ui</TitleNormal>
        <TextNormal>
          Common react ui components to make your
          <br />
          website developing faster. (Used to make this website)
        </TextNormal>
        <Link external to='//www.npmjs.com/package/@v-thomas/core-ui' icon>
          www.npmjs.com/package/@v-thomas/core-ui
        </Link>
      </Card>
      <Card style={{ cursor: "unset" }}>
        <TitleNormal>@v-thomas/hooks</TitleNormal>
        <TextNormal>
          Common react hooks to make your
          <br />
          website developing faster.
        </TextNormal>
        <Link external to='//www.npmjs.com/package/@v-thomas/hooks' icon>
          www.npmjs.com/package/@v-thomas/hooks
        </Link>
      </Card>
    </Modal>
  );
};
