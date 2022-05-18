import { ButtonNotStyled } from "@core/components/button/not-styled";
import { TextNormal } from "@core/components/text/normal";
import { TitleNormal } from "@core/components/title/normal";
import { Link, Modal } from "@v-thomas/core-ui";
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
      <TitleNormal>Other Tools</TitleNormal>
      <ButtonNotStyled onClick={toggleOff}>
        <Image
          width='30'
          height='30'
          alt=''
          src={"https://assets.v-thomas.me/x-mark.svg"}
        ></Image>
      </ButtonNotStyled>
      <TextNormal>
        Other projects that I have made/contributed to. I also seek new projects
        I can contribute to. If you&apos;ve seen one email me{" "}
        <Link external to='mailto:vincent.nathan.thomas@gmail.com'>
          here
        </Link>
      </TextNormal>
    </Modal>
  );
};
