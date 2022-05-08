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

export const AppsModal = ({
  isOpen,
  toggleOff,
}: {
  isOpen: boolean;
  toggleOff: () => void;
}) => {
  return (
    <Modal isOpen={isOpen} gap="1">
      <Row gap="auto">
        <Title>Applications</Title>
        <Button noStyle onClick={toggleOff}>
          x
        </Button>
      </Row>
      <Text>Here are some of the apps that i have made/created</Text>

      <Card noHover style={{ cursor: "unset" }}>
        <Col gap="0.5">
          <Title>MovieReviewer</Title>
          <Link external to="//link.v-thomas.me/movie" icon>
            https://movie.v-thomas.me
          </Link>
        </Col>
      </Card>
    </Modal>
  );
};
