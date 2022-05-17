import { FC, ReactNode } from "react";
import S from "./page-wrapper.module.scss";

export const PageWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={S["page-wrapper"]}>{children}</div>;
};
