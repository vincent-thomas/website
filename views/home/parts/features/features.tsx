import { AppsCard } from "../../../home/components/apps-card/apps-card";
import { LibsCard } from "../../../home/components/libs-card/libs-card";
import { OtherCard } from "../../../home/components/other-card/libs-card";
import { Punctuation } from "core/ui/punctuation/punctuation";
import S from "./features.module.scss";
export const Features = () => {
  return (
    <div className={S["wrapper"]}>
      <div className={S["container"]}>
        <Punctuation text='I have made' />
        <div className={S["card-container"]}>
          <AppsCard />
          <LibsCard />
          <OtherCard />
        </div>
      </div>
    </div>
  );
};
