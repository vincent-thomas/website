import { AppsCard } from "scoped/home/components/apps-card/apps-card";
import { LibsCard } from "scoped/home/components/libs-card/libs-card";
import { OtherCard } from "scoped/home/components/other-card/libs-card";
import { Punctuation } from "scoped/home/components/punctuation/punctuation";
import S from "./features.module.scss";
export const Features = () => {
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

// {/* </ResponsiveRow>
// </Section> */}
