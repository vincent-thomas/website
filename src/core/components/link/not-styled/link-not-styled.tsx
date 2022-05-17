import { AnchorHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from "react";
import S from "./link-not-styled.module.scss";

export const LinkNotStyled: FC<
  { children: ReactNode } & DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
> = ({ ...props }) => {
  const { children, className, ...otherProps } = props;

  return (
    <a
      className={
        className ? `${S["not-styled"]} ${className}` : S["not-styled"]
      }
      {...otherProps}
    >
      {children}
    </a>
  );
};
