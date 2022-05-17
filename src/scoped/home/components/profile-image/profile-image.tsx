import { motion } from "framer-motion";
import styled from "styled-components";

const ImageContainer = styled.div`
  width: 370px !important;
  max-width: 100%;
  max-height: 370px;
  position: relative;
`;

const ProfileImageSC = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ArrowContainer = styled(motion.div)`
  position: absolute;

  right: -5rem;
  top: -2rem;
  width: 60px;
  height: 60px;
  @media screen and (max-width: 1500px) and (min-width: 965px) {
    display: none;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const Arrow = styled(motion.img)`
  width: 50px;
  height: 50px;
`;

export const ProfileImage = () => {
  return (
    <ImageContainer>
      <ProfileImageSC
        src="/face.png"
        alt=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, borderRadius: "15%" }}
        transition={{ delay: 0.25 }}
      />
      <ArrowContainer
        initial={{ opacity: 0, x: 100, y: 0 }}
        animate={{ opacity: 1, x: 0, y: [0, -30, 0], rotate: -150 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Arrow
          src="/image_arrow.svg"
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      </ArrowContainer>
    </ImageContainer>
  );
};
