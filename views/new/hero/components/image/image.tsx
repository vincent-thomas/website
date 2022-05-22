import { motion } from "framer-motion";
import NImage from "next/image";

import S from "./image.module.scss";

const transition = {
  duration: 0.6,
  ease: [0.6, 0.01, -0.05, 0.9],
};

export const Image = () => {
  return (
    <div className={S["image-container"]}>
      <div className={S["up"]} />
      <div className={S["image-wrapper"]}>
        <motion.img
          width='375'
          height='375'
          src='/face.png'
          className={S["image"]}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={transition}
        />
      </div>
      <div className={S["down"]} />
    </div>
  );
};
