import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from "react";

import S from "./button-secondary.module.scss";

export const ButtonSecondary: FC<
  { children: ReactNode } & DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ children, className, ...props }) => {
  return (
    <button className={`${S["base"]} ${className}`} {...props}>
      {children}
    </button>
  );
};
