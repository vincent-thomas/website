import type { NextPage } from "next";

import {
  ButtonContainer,
  Card,
  Col,
  Divider as RealDivider,
  DividerProps,
  Row,
  Text,
  Title,
} from "@v-thomas/core-ui";
import styled, { css } from "styled-components";
import { motion, Variants } from "framer-motion";
import { AppsCard } from "scoped/home/components/apps-card/apps-card";
import { LibsCard } from "scoped/home/components/libs-card/libs-card";
import { Section } from "../shared/ui";
import {
  ButtonPrimary,
  SocialEmailIcon,
  SocialGithubIcon,
} from "core/components";
import { ProfileImage } from "../scoped/home/components/profile-image/profile-image";
import { Punctuation } from "../scoped/home/components/punctuation/punctuation";
import { OtherCard } from "../scoped/home/components/other-card/libs-card";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { SHORTS } from "core/utils";
import { Underline } from "@core/ui/underline";
import { LinkNotStyled } from "@core/components/link/not-styled";
import { PageWrapper } from "scoped/home/components/page-wrapper";

const Divider = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> &
    DividerProps
) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.75, duration: 0.25 }}
  >
    {/* @ts-ignore */}
    <RealDivider {...props} />
  </motion.div>
);

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

interface TitleSectionProps {
  underline?: boolean;
}

const TitleSection = styled(Text)<TitleSectionProps>`
  color: var(--clr-text-secondary);
`;

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

const ResponsiveRow = styled(Row)`
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const Home: NextPage = () => {
  return (
    <PageWrapper>
      <Section
        gap="0.75"
        top={false}
        style={{ paddingTop: "5rem" }}
        bottom={false}
      >
        <Header>
          <Col
            style={{ marginTop: "3rem", marginRight: "3rem" }}
            gap="1"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            <NameTitle size="3">
              <TitleSection bold>Hi, I&apos;m </TitleSection>
              <Underline>Vincent Thomas</Underline>!
            </NameTitle>
            <Text style={{ margin: 0, lineHeight: "1.3rem" }}>
              I&apos;m an 15 year old guy who loves to code and learn new stuff.
              <br />I make apps that (hopefully) made{" "}
              <b>peoples lives better</b>.<br />
              The problem is the general public doesn&apos;t know now they exist
            </Text>
            <ButtonContainer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.25 }}
            >
              <Card padding="0.75" noHover width="auto">
                <Row gap="1">
                  <LinkNotStyled href={SHORTS.EMAIL_ME_LINK}>
                    <ButtonPrimary>Contact Me</ButtonPrimary>
                  </LinkNotStyled>
                  <SocialGithubIcon />
                  <SocialEmailIcon />
                </Row>
              </Card>
            </ButtonContainer>
          </Col>
          <ProfileImage />
        </Header>
      </Section>
      <Divider style={{ marginTop: "3.5rem", marginBottom: "3rem" }} />
      <Section top={false} gap="1" bottom={false}>
        <Punctuation text="I have made" />
        <ResponsiveRow gap="2" variants={cardRootVariant} animate={"show"}>
          <AppsCard />
          <LibsCard />
          <OtherCard />
        </ResponsiveRow>
      </Section>
    </PageWrapper>
  );
};

export default Home;
