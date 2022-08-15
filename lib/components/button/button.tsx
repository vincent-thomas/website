import { ReactNode } from "react";

import { TButton } from "./button.types";
import S from "./button.module.scss";
type ButtonProps = {
  children: ReactNode;
  type: "not-styled" | "primary" | "secondary";
  btnType?: "submit" | "button" | "reset";
};
export const Button = ({
  children,
  className,
  type,
  ref: _ref,
  btnType = "button",
  ...props
}: TButton & ButtonProps) => (
  <button
    className={`${S["button"]} ${className || ""}`}
    data-btn-type={type}
    type={btnType}
    {...props}
  >
    {children}
  </button>
);
