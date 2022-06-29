import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
import S from "./text.module.scss";
export const Text: FC<
  { children: ReactNode; restrictWidth?: boolean } & DetailedHTMLProps<
    HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >
> = ({ children, restrictWidth, className, ...props }) => (
  <span
    className={`${S["text"]} ${className}`}
    style={restrictWidth ? { maxWidth: "50ch" } : {}}
    {...props}
  >
    {children}
  </span>
);
