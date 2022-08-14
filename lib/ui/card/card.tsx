import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
import S from "./card.module.scss";

export const Card: FC<
  {
    children: ReactNode;
    padding?: string;
    type: "light" | "dark";
  } & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, padding = "1", type, ...props }) => {
  return (
    <div
      className={`${S["wrapper"]} ${S["type-" + type]}`}
      style={{ padding: `${padding}rem` }}
      {...props}
    >
      <div className={S["container"]}>{children}</div>
    </div>
  );
};
