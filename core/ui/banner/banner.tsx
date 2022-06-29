import { Link } from "core/components/link";
import { FC, ReactNode } from "react";
import S from "./banner.module.scss";

export const Banner: FC<{ children: ReactNode; link?: string }> = ({
  children,
  link,
  ...props
}) => {
  return (
    <Link
      className={S["container"]}
      to={link || "#"}
      type='not-styled'
      external={!!link}
      {...props}
    >
      <span className={S["content"]}>{children}</span>
    </Link>
  );
};
