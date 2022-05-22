import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

import S from "./title-normal.module.scss";

export const TitleNormal: FC<
  { size?: "big" | "medium" | "small" } & DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
> = ({ children, size = "medium", className, ...props }) => {
  return (
    <h2
      className={
        className
          ? `${className} ${S["title"]} ${S[size]}`
          : `${S["title"]} ${S[size]}`
      }
      {...props}
    >
      {children}
    </h2>
  );
};
