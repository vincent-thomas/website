import { TitleNormal } from "@/core/components";
import { Punctuation } from "@/core/ui/punctuation";
import S from "./projects.module.scss";

export const ProjectsView = () => {
  return process.env.NODE_ENV === "development" ? (
    <div className={S["wrapper"]}>
      <div className={S["container"]}>
        <Punctuation text='Projects' size='big' color='dark' />
      </div>
    </div>
  ) : (
    <div className={S["wrapper"]} style={{ padding: "3rem", paddingTop: 0 }}>
      <TitleNormal color='dark'>Coming more soon...</TitleNormal>
    </div>
  );
};
