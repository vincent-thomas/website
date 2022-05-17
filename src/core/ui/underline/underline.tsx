import { FC, ReactNode } from "react";
import S from "./underline.module.scss";

export const Underline: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={S["wrapper"]}>
      <span className={S["container-underline"]}>
        {children}
        <span className={S["title-underline"]} />
      </span>
    </div>
  );
};
