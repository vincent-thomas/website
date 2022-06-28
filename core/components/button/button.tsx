import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from "react";

import S from "./button.module.scss";

type TButton = FC<
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    children: ReactNode;
    version?: "not-styled" | "primary" | "secondary";
  }
>;

export const Button: TButton = ({
  children,
  version = "not-styled",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`${S["button"]} ${className}`}
      data-btn-type={version}
      {...props}
    >
      {children}
    </button>
  );
};
