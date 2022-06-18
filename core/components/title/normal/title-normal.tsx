import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

import S from "./title-normal.module.scss";

export const TitleNormal: FC<
  {
    size?: "big" | "medium" | "small";
    color?: "light" | "dark";
  } & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
> = ({ children, size = "medium", className, color = "light", ...props }) => {
  return (
    <h2
      className={
        className
          ? `${className} ${S["title"]} ${S[size]} ${S[color]}`
          : `${S["title"]} ${S[size]} ${S[color]}`
      }
      {...props}
    >
      {children}
    </h2>
  );
};
