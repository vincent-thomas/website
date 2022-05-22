import { AnchorHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from "react";
import S from "./link-normal.module.scss";

export const LinkNormal: FC<
  { children: ReactNode } & DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
> = ({ ...props }) => {
  const { children, className, ...otherProps } = props;

  return (
    <a
      className={
        className ? `${S["link-normal"]} ${className}` : S["link-normal"]
      }
      {...otherProps}
    >
      {children}
    </a>
  );
};
