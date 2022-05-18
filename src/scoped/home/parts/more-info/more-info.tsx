import { TitleNormal } from "@core/components/title/normal";
import { Punctuation } from "@core/ui/punctuation/punctuation";
import S from "./more-info.module.scss";

export const MoreInfo = () => {
  return (
    // <Section
    //   top={false}
    //   gap='1'
    //   bottom={false}
    //   style={{ backgroundColor: "var(--clr-background-secondary)" }}
    // >
    //   <ResponsiveRow gap='2' variants={cardRootVariant} animate={"show"}>
    <div className={S["wrapper"]}>
      <div className={S["container"]}>
        <TitleNormal>Contact Me</TitleNormal>
        <div className={S["card-container"]}></div>
      </div>
    </div>
  );
};
