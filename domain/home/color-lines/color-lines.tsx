import { FC } from "react";
import S from "./color-lines.module.scss";

export const ColorLines: FC<{ flip?: boolean; removeBottom?: boolean }> = ({
  flip = false,
  removeBottom = false
}) => (
  <div className={S["wrapper"]} data-test='color-lines'>
    <div className={`${S["container"]} ${flip ? S["flip"] : ""}`}>
      <div className={S["cover"]} />
      <div className={S["top"]} />
      {!removeBottom && <div className={S["bottom"]} />}
    </div>
  </div>
);
