import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
import S from "./card.module.scss";

export const Card: FC<
  { children: ReactNode; padding?: string } & DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
> = ({ children, padding = "1", ...props }) => {
  return (
    <div
      className={S["wrapper"]}
      style={{ padding: `${padding}rem` }}
      {...props}
    >
      <div className={S["container"]}>{children}</div>
    </div>
  );
};
