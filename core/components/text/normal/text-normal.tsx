import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
import S from "./text-normal.module.scss";
export const TextNormal: FC<
  { children: ReactNode; restrictWidth?: boolean } & DetailedHTMLProps<
    HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >
> = ({ children, restrictWidth, ...props }) => (
  <span
    className={S["text"]}
    {...props}
    style={restrictWidth ? { maxWidth: "50ch" } : {}}
  >
    {children}
  </span>
);
