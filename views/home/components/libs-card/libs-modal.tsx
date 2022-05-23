import { ButtonNotStyled } from "core/components/button/not-styled";
import { TextNormal } from "core/components/text/normal";
import { TitleNormal } from "core/components/title/normal";
import { Card, Modal } from "@v-thomas/core-ui";
import { LinkNormal } from "@/core/components";

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
        <img
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
        <LinkNormal
          href='//www.npmjs.com/package/@v-thomas/core-ui'
          target='_blank'
        >
          www.npmjs.com/package/@v-thomas/core-ui
        </LinkNormal>
      </Card>
      <Card style={{ cursor: "unset" }}>
        <TitleNormal>@v-thomas/hooks</TitleNormal>
        <TextNormal>
          Common react hooks to make your
          <br />
          website developing faster.
        </TextNormal>
        <LinkNormal
          href='//www.npmjs.com/package/@v-thomas/hooks'
          target='_blank'
        >
          www.npmjs.com/package/@v-thomas/hooks
        </LinkNormal>
      </Card>
    </Modal>
  );
};
