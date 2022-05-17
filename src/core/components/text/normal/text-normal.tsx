import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
import S from "./text-bold.module.scss";
export const TextNormal: FC<
  { children: ReactNode } & DetailedHTMLProps<
    HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >
> = ({ children, ...props }) => (
  <span className={S[""]} {...props}>
    {children}
  </span>
);
