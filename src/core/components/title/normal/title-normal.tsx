import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

import S from "./title-normal.module.scss";

export const TitleNormal: FC<
  { size?: "big" | "medium" | "small" } & DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
> = ({ children, size = "medium", className, ...props }) => {
  const translations = {
    big: "3rem",
    medium: "2rem",
    small: "1.5rem",
  };

  return (
    <h1
      className={className ? `${className} ${S["title"]}` : S["title"]}
      style={{ fontSize: translations[size] }}
      {...props}
    >
      {children}
    </h1>
  );
};