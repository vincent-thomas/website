import { TitleNormal } from "core/components/title/normal";
import S from "./more-info.module.scss";

export const MoreInfo = () => {
  return (
    <div className={S["wrapper"]}>
      <div className={S["container"]}>
        <TitleNormal>Contact Me</TitleNormal>
        <div className={S["card-container"]}></div>
      </div>
    </div>
  );
};
