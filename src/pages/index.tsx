import type { NextPage } from "next";

import {
  Button,
  ButtonContainer,
  Card,
  Col,
  Divider,
  Link,
  Row,
  Text,
  Title,
} from "@v-thomas/core-ui";
import styled from "styled-components";
import Image from "next/image";
import SVGDot from "../assets/dot.svg";
import GithubLogoImg from "../assets/github.svg";
import { motion, Variants } from "framer-motion";
import { AppsCard } from "../scoped/home/ui/apps-card/apps-card";
import { LibsCard } from "../scoped/home/ui/libs-modal/libs-card";
import animateScrollTo from "animated-scroll-to";
import { Section } from "../shared/ui";

const ProfileImage = styled(motion.img)`
  width: 350px;
  max-width: 100%;
  object-fit: cover;
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

const cardRootVariant: Variants = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const TitleSecSection = styled(Text)`
  color: ${({ theme }) => theme.text.primary};
`;

const TitlePriSection = styled(Text)`
  color: ${({ theme }) => theme.text.primary};
`;

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "backIn",
    },
  },
};

const Dot = () => <Image src={SVGDot} width="15" height="15" />;
const GithubLogo = () => <Image src={GithubLogoImg} />;

interface Inputs {
  left?: string;
  right?: string;
}

const NameTitle = styled(Title)`
  margin: 0;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const HoverBackground = styled(motion.div)`
  background-color: transparent;
  padding: 0.5rem 0.5rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    transition: background-color 0.2s ease-in-out;

    background-color: ${({ theme }) => theme.background.third};
  }
`;

const UnderLine = styled(motion.span)<Inputs>`
  position: absolute;
  left: ${({ left }) => left || 0};
  right: ${({ right }) => right || 0};
  bottom: 0;
  width: 0;
  height: 5px;
  border-top-left-radius: 4rem;
  border-bottom-right-radius: 4rem;
  background-color: ${({ theme }) => theme.color.primaryHover};
`;

const ResponsiveRow = styled(Row)`
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;
const scroll = () =>
  animateScrollTo(document.querySelector(".about") as Element, {});

const Home: NextPage = () => {
  return (
    <>
      <Wrapper>
        <Section
          gap="0.75"
          top={false}
          style={{ paddingTop: "5rem" }}
          bottom={false}
        >
          <Header>
            <Col style={{ marginTop: "3rem", marginRight: "3rem" }} gap="1">
              <NameTitle
                size="3"
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <TitlePriSection bold>Hi, I&apos;m </TitlePriSection>
                <TitleSecSection style={{ position: "relative" }}>
                  Vincent Thomas!
                  <UnderLine
                    left="0.25rem"
                    animate={{ width: "99%" }}
                    transition={{ delay: 0.75, duration: 1 }}
                  />
                </TitleSecSection>
              </NameTitle>
              <Text
                style={{ margin: 0, lineHeight: "1.3rem" }}
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                I&apos;m an 15 year old guy who loves to code and learn new
                stuff.
                <br />I make apps that (hopefully) made{" "}
                <b>peoples lives better</b>.
                <br />
                The problem is the general public doesn&apos;t know now they
                exist
              </Text>
              <ButtonContainer
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.3 }}
                gap="1"
                style={{ alignItems: "center" }}
              >
                <Card
                  padding="0.75"
                  noHover
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <Row gap="1">
                    <Button
                      onClick={scroll}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                    >
                      Learn more
                    </Button>
                    <Button
                      noStyle
                      onClick={() => window.open("//link.v-thomas.me/github")}
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2 }}
                      >
                        <HoverBackground
                          onClick={() =>
                            window.open("//link.v-thomas.me/github")
                          }
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 2 }}
                          style={{ display: "grid", placeItems: "center" }}
                        >
                          <Image
                            src="/github_light.png"
                            alt=""
                            width="30"
                            height="30"
                          />
                        </HoverBackground>
                      </motion.div>
                    </Button>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.25 }}
                      style={{ display: "grid", placeItems: "center" }}
                    >
                      <Link
                        external
                        to="mailto:vincent.nathan.thomas@gmail.com"
                      >
                        <HoverBackground
                          className="testing"
                          style={{ display: "grid", placeItems: "center" }}
                        >
                          <Image
                            width="30"
                            height="30"
                            src="/material_icon-email_white.svg"
                            alt=""
                          />
                        </HoverBackground>
                      </Link>
                    </motion.div>
                  </Row>
                </Card>
              </ButtonContainer>
            </Col>
            <motion.div>
              <ProfileImage
                src="/face.png"
                alt=""
                width="350"
                height="350"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, borderRadius: "15%" }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          </Header>
        </Section>
        <Divider style={{ marginBlock: "5rem", marginBottom: "4rem" }} />
        <Section top={false} gap="1" bottom={false}>
          <Row gap="1" style={{ alignItems: "center", marginBottom: "1rem" }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Dot />
            </motion.div>
            <Title
              style={{ position: "relative" }}
              initial={{ left: "-2rem" }}
              animate={{ left: 0 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              I have made
            </Title>
          </Row>
          <ResponsiveRow gap="2" variants={cardRootVariant} animate={"show"}>
            <AppsCard variant={item} />
            <LibsCard variant={item} />
            <Card variants={item}>
              <Col gap="0.25">
                <Title>CLIs</Title>
                <Text restrictWidth>
                  I have created CLIs which stand for Command Line Interface,
                  which performs a specific task.
                </Text>
              </Col>
            </Card>
          </ResponsiveRow>
        </Section>
        <Divider style={{ marginTop: "5rem", marginBottom: "0" }} />
        <Section style={{ paddingTop: "5rem", margin: 0 }} className="about">
          <Row gap="1" style={{ alignItems: "center", marginBottom: "1rem" }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Dot />
            </motion.div>
            <Title size="2.5">
              About Me
              {/* <UnderLine
                animate={{ width: "20%" }}
                transition={{ delay: 0.75, duration: 1 }}
              /> */}
            </Title>
          </Row>

          <Card
            style={{ marginRight: "auto", marginLeft: "7.5rem" }}
            padding="2"
          >
            <Title>Interests</Title>
            <Text>
              I am like to sail and code on my free time,
              <br />
              i&apos;m also in school so i study too
            </Text>
          </Card>

          <Card
            style={{
              marginLeft: "auto",
              marginRight: "7.5rem",
              marginTop: "7.5rem",
            }}
            padding="2"
          >
            <Title>Not done</Title>
            <Text>This is not finished</Text>
          </Card>
        </Section>
      </Wrapper>
    </>
  );
};

export default Home;
