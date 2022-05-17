import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from "react";

import S from "./button-primary.module.scss";

export const ButtonPrimary: FC<
  { children: ReactNode } & DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ children, ...props }) => {
  return (
    <button className={S["base"]} {...props}>
      {children}
    </button>
  );
};
