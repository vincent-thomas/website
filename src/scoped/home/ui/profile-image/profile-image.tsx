import { motion } from "framer-motion";
import styled from "styled-components";

const ProfileImageSC = styled(motion.img)`
  width: 350px;
  max-width: 100%;
  object-fit: cover;
`;
export const ProfileImage = () => {
  return (
    <ProfileImageSC
      src="/face.png"
      alt=""
      width="350"
      height="350"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, borderRadius: "15%" }}
      transition={{ delay: 1 }}
    />
  );
};
