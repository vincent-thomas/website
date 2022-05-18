import {
  Button,
  Card,
  Code,
  Col,
  Link,
  Modal,
  Row,
  Text,
  Title,
} from "@v-thomas/core-ui";
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
      {/* <Row gap="auto"> */}
      <Title>Other Tools</Title>
      <Button noStyle onClick={toggleOff}>
        <Image
          width='30'
          height='30'
          alt=''
          src={"https://assets.v-thomas.me/x-mark.svg"}
        ></Image>
      </Button>
      {/* </Row> */}
      <Text>
        Other projects that I have made/contributed to. I also seek new projects
        I can contribute to. If you&apos;ve seen one email me{" "}
        <Link external to='mailto:vincent.nathan.thomas@gmail.com'>
          here
        </Link>
      </Text>
    </Modal>
  );
};
