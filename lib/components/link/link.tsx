import { FC } from "react";
import S from "./link.module.scss";
import { ILink, LinkProps } from "./link.types";

export const Link: FC<ILink & LinkProps> = ({
  type,
  to,
  external = false,
  className = "",
  children,
  ...props
}) => (
  <a
    href={to}
    data-type={type}
    className={`${className} ${S["link"]}`}
    target={external ? "_blank" : "_self"}
    rel='noreferrer'
    {...props}
  >
    {children}
  </a>
);
