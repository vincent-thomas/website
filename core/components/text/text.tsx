import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
import S from "./text.module.scss";
export const Text: FC<
  {
    children: ReactNode;
    restrictWidth?: boolean;
    size?: "small" | "medium" | "large";
  } & DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
> = ({ children, restrictWidth, className, size = "medium", ...props }) => (
  <span
    className={`${S["text"]} ${className} ${S[`text-${size}`]}`}
    style={restrictWidth ? { maxWidth: "50ch" } : {}}
    {...props}
  >
    {children}
  </span>
);
