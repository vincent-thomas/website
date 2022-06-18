import { FC, ReactNode } from "react";
import { Navbar } from "../navbar";
import S from "./wrapper.module.scss";

export const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={S["wrapper"]}>
      <Navbar></Navbar>
      <div className={S["content"]}>{children}</div>
    </div>
  );
};
