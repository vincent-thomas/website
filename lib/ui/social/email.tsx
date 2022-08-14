import { HoverBackground } from "lib/ui/hover-background/hover-background";
import { motion } from "framer-motion";
import { Link } from "lib/components/link";
export const SocialEmailIcon = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.75, duration: 0.25 }}
      style={{ display: "grid", placeItems: "center" }}
    >
      <Link type='not-styled' to='mailto:vincent.nathan.thomas@gmail.com'>
        <HoverBackground style={{ display: "grid", placeItems: "center" }}>
          <img
            width='30'
            height='30'
            src='/material_icon-email_white.svg'
            alt=''
          />
        </HoverBackground>
      </Link>
    </motion.div>
  );
};
