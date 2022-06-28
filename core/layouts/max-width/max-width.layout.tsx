import { FC, ReactNode } from "react";
import S from "./max-width.module.scss";

export const MaxWidthLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return <section className={S["wrapper"]}>{children}</section>;
};
