import Image from "next/image";
import { HoverBackground } from "core/ui/hover-background/hover-background";
import { motion } from "framer-motion";
import { LinkNotStyled } from "core/components/link/not-styled";
export const SocialEmailIcon = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.75, duration: 0.25 }}
      style={{ display: "grid", placeItems: "center" }}
    >
      <LinkNotStyled href='mailto:vincent.nathan.thomas@gmail.com'>
        <HoverBackground style={{ display: "grid", placeItems: "center" }}>
          <Image
            width='30'
            height='30'
            src='/material_icon-email_white.svg'
            alt=''
          />
        </HoverBackground>
      </LinkNotStyled>
    </motion.div>
  );
};
