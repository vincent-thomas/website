import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from "react";
import S from "./button-not-styled.module.scss";

export const ButtonNotStyled: FC<
  { children: ReactNode } & DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ children }) => {
  return <button className={S["button-not-styled"]}>{children}</button>;
};
