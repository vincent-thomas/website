import { ReactNode } from "react";

import S from "./texting.module.scss";

export const Texting = ({ children }: { children: ReactNode }) => {
  return <div className={S["texting"]}>{children}</div>;
};
