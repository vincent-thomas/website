import { FC, HTMLAttributes } from "react";

export const InfoTitle: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className
}) => (
  <h2 className={`text-info text-[2rem] font-bold ${className}`}>{children}</h2>
);
