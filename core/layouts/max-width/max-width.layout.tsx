import { FC, ReactNode } from "react";
import S from "./max-width.module.scss";

export const MaxWidthLayout: FC<{
  children: ReactNode;
  mode?: "light" | "dark";
  bottom?: boolean;
  top?: boolean;
}> = ({ children, mode = "light", bottom = true, top = true }) => {
  return (
    <section className={S[`wrapper-${mode}`]}>
      <div className={S[`content`]} data-bottom={bottom} data-top={top}>
        {children}
      </div>
    </section>
  );
};
