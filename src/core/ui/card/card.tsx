import { FC, ReactNode } from "react";
import S from "./card.module.scss";

export const Card: FC<{ children: ReactNode; padding?: string }> = ({
  children,
  padding = "1",
}) => {
  return (
    <div className={S["wrapper"]} style={{ padding: `${padding}rem` }}>
      <div className={S["container"]}>{children}</div>
    </div>
  );
};
