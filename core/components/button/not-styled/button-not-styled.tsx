import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from "react";
import S from "./button-not-styled.module.scss";

export const ButtonNotStyled: FC<
  { children: ReactNode } & DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ children, className = "", ...props }) => {
  return (
    <button className={`${className} ${S["button-not-styled"]}`} {...props}>
      {children}
    </button>
  );
};
