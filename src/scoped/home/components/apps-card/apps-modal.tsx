import {
  Button,
  Card,
  Col,
  Link,
  Modal,
  Row,
  Text,
  Title,
} from "@v-thomas/core-ui";
import Image from "next/image";

export const AppsModal = ({
  isOpen,
  toggleOff,
}: {
  isOpen: boolean;
  toggleOff: () => void;
}) => {
  return (
    <Modal isOpen={isOpen}>
      {/* <Row gap="auto"> */}
      <Title>Applications</Title>
      <Button noStyle onClick={toggleOff}>
        <Image
          width='30'
          height='30'
          src='https://assets.v-thomas.me/x-mark.svg'
          alt='Close button'
        />
      </Button>
      {/* </Row> */}
      <Text>Here are some of the apps that i have made/created</Text>

      <Card style={{ cursor: "unset" }}>
        {/* <Col gap='0.5'> */}
        <Title>MovieReviewer</Title>
        <Link external to='//link.v-thomas.me/movie' icon>
          https://movie.v-thomas.me
        </Link>
        {/* </Col> */}
      </Card>
    </Modal>
  );
};
