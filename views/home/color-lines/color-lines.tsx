import { FC } from "react";
import S from "./color-lines.module.scss";

const ColorLines: FC<{ flip?: boolean }> = ({ flip = false }) => {
  return (
    <div className={S["wrapper"]} data-test='color-lines'>
      <div className={`${S["container"]} ${flip && S["flip"]}`}>
        <div className={S["cover"]}></div>
        <div className={S["top"]} />
        <div className={S["bottom"]} />
      </div>
    </div>
  );
};
export default ColorLines;
