import { DetailedHTMLProps, FC, HTMLAttributes, useMemo } from "react";

import S from "./title.module.scss";

const TitleHelper = ({ type, ...props }: any) => {
  if (type === "large" || type === "info") {
    return <h1 {...props}></h1>;
  } else if (type === "medium") {
    return <h2 {...props}></h2>;
  } else {
    return <h3 {...props}></h3>;
  }
};

export const Title: FC<
  {
    size?: "large" | "medium" | "small" | "info";
    color?: "light" | "dark";
  } & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
> = ({
  size = "medium",
  className = "",
  color = "light",
  children,
  ...props
}) => {
  const classes = `${className} ${S[`color-${color}`]} ${S["title"]}`;

  return (
    <TitleHelper
      type={size}
      className={classes}
      data-size={size}
      {...props}
      data-title
    >
      {children}
    </TitleHelper>
  );
};
