import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";

import S from "./title-info.module.scss";

export const TitleInfo: FC<
  { children: ReactNode } & DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
> = ({ children, className, ...props }) => {
  const classes = !!className
    ? `${S["title-info"]} ${className}`
    : `${S["title-info"]}`;

  return (
    <h1 className={classes} {...props}>
      {children}
    </h1>
  );
};
