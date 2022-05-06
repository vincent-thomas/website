import type { NextPage } from "next";

import {
  Button,
  ButtonContainer,
  Card,
  Col,
  Divider,
  Row,
  Text,
  Title,
} from "@v-thomas/core-ui";
import { SharedNavbar } from "../shared/ui/navbar";
import styled from "styled-components";
import Image from "next/image";

interface SectionProps {
  top?: boolean;
  bottom?: boolean;
}

const Section = styled(Col)<SectionProps>`
  margin-top: ${({ top = true }) => (top ? "15rem" : "0")};
  margin-bottom: ${({ bottom = true }) => (bottom ? "15rem" : "0")};
`;

const Wrapper = styled.div`
  max-width: calc(1200px - 4rem);
  margin: 0 auto;
  padding: 0 2rem;
  padding-bottom: 5rem;
`;

const Header = styled(Row)`
  flex-wrap: wrap-reverse;
`;

const CardsTitle = styled(Title)`
  color: ${({ theme }) => theme.text.primary};
`;

const Home: NextPage = () => {
  return (
    <>
      <SharedNavbar />
      <Wrapper>
        <Section
          gap="0.75"
          top={false}
          style={{ marginTop: "10rem" }}
          bottom={false}
        >
          <Header>
            <Col style={{ marginTop: "3rem" }} gap="1">
              <Title size="3" style={{ margin: 0 }}>
                Hi, I&apos;m Vincent Thomas!
              </Title>
              <Text style={{ margin: 0, lineHeight: "1.3rem" }}>
                I&apos;m an 15 year old guy who loves to code and learn new
                stuff.
                <br />I make apps that (hopefully) made{" "}
                <b>peoples lives better</b>.
                <br />
                The problem is the general public doesn&apos;t know now they
                exist
              </Text>
              <ButtonContainer>
                <Button>Learn more</Button>
              </ButtonContainer>
            </Col>
            <div>
              <Image
                src="/face.png"
                alt=""
                width="300"
                height="300"
                style={{ borderRadius: "10%" }}
              />
            </div>
          </Header>
        </Section>
        <Divider style={{ marginTop: "5rem" }} />
        <Section top={false} gap="1" bottom={false}>
          <CardsTitle size="1.5">I have made</CardsTitle>
          <Row gap="2">
            <Card>
              <Col gap="0.25">
                <Title style={{ margin: 0 }}>Apps</Title>
                <Text restrictWidth>
                  I have made web-applications with different variations of use
                  cases, including movies. I have more to do here.
                </Text>
              </Col>
            </Card>
            <Card>
              <Col gap="0.25">
                <Title style={{ margin: 0 }}>Libraries</Title>
                <Text restrictWidth>
                  I have contributed to the npm ecosystem with multiple packages
                  that makes general tasks with js/ts much easier and less
                  complicated
                </Text>
              </Col>
            </Card>
            <Card>
              <Col gap="0.25">
                <Title style={{ margin: 0 }}>CLIs, Tools</Title>
                <Text restrictWidth>
                  I have created CLIs which stand for Command Line Interface,
                  which performs a specific task.
                </Text>
              </Col>
            </Card>
          </Row>
        </Section>
      </Wrapper>
    </>
  );
};

export default Home;
