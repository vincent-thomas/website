import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from "react";
import S from "./button-not-styled.module.scss";

export const ButtonNotStyled: FC<
  { children: ReactNode } & DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ children, className, ...props }) => {
  const classNames = className
    ? `${className} ${S["button-not-styled"]}`
    : S["button-not-styled"];

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};
