import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from "react";

import S from "./button-primary.module.scss";

export const ButtonPrimary: FC<
  { children: ReactNode } & DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ children, ...props }) => {
  let classNames = props.className;
  delete props.className;
  return (
    <button className={`${S["base"]} ${classNames || ""}`} {...props}>
      {children}
      <span className={S["decorate"]}></span>
    </button>
  );
};
