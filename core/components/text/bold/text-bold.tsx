import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
import S from "./text-bold.module.scss";
export const TextBold: FC<
  { children: ReactNode } & DetailedHTMLProps<
    HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >
> = ({ children, ...props }) => (
  <span className={S["text"]} {...props}>
    {children}
  </span>
);
