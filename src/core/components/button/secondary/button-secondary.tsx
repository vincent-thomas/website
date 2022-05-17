import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from "react";

import S from "./button-secondary.module.scss";

export const ButtonSecondary: FC<
  { children: ReactNode } & DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ children }) => {
  return <button className={S["base"]}>{children}</button>;
};
