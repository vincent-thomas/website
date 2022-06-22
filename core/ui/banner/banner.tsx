import { LinkNotStyled } from "core/components/link/not-styled";
import { FC, ReactNode } from "react";
import S from "./banner.module.scss";

export const Banner: FC<{ children: ReactNode; link?: string }> = ({
  children,
  link,
  ...props
}) => {
  return (
    <LinkNotStyled
      className={S["container"]}
      href={link ? link : "#"}
      target={link ? "_blank" : "_self"}
      rel='noreferrer'
      {...props}
    >
      <span className={S["content"]}>{children}</span>
    </LinkNotStyled>
  );
};
