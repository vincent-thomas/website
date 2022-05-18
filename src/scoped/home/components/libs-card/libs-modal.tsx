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
      <Title>Libraries</Title>
      <Button noStyle onClick={toggleOff}>
        <Image
          width='30'
          height='30'
          src='https://assets.v-thomas.me/x-mark.svg'
          alt='Close button'
        />
      </Button>
      {/* </Row> */}
      <Text>
        These libraries are created to help developers (and me)
        <br />
        to create better websites, easier
      </Text>
      <Card style={{ cursor: "unset" }}>
        {/* <Col gap='0.5'> */}
        <Title>@v-thomas/core-ui</Title>
        <Text>
          Common react ui components to make your
          <br />
          website developing faster. (Used to make this website)
        </Text>
        <Link external to='//www.npmjs.com/package/@v-thomas/core-ui' icon>
          www.npmjs.com/package/@v-thomas/core-ui
        </Link>
        {/* </Col> */}
      </Card>
      <Card style={{ cursor: "unset" }}>
        {/* <Col gap='0.5'> */}
        <Title>@v-thomas/hooks</Title>
        <Text>
          Common react hooks to make your
          <br />
          website developing faster.
        </Text>
        <Link external to='//www.npmjs.com/package/@v-thomas/hooks' icon>
          www.npmjs.com/package/@v-thomas/hooks
        </Link>
        {/* </Col> */}
      </Card>
    </Modal>
  );
};
