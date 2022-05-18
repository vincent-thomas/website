import { LinkNotStyled } from "@core/components/link/not-styled";
import { TextNormal } from "@core/components/text/normal";
import { Underline } from "@core/ui/underline";
import S from "./footer.module.scss";

export const Footer = () => {
  return (
    <div className={S["wrapper"]}>
      <div className={S["container"]}>
        <span className={S["border"]} />
        <div className={S["content"]}>
          <div className={"left"}>
            <LinkNotStyled
              href='mailto:vincent.nathan.thomas@gmail.com'
              target='_blank'
            >
              <Underline>Email</Underline>
            </LinkNotStyled>
            <LinkNotStyled href='https://twitter.com/Vincent05672456'>
              <Underline>Twitter</Underline>
            </LinkNotStyled>
          </div>
          <div className={S["right"]}>
            <TextNormal>
              Created by{" "}
              <LinkNotStyled
                href='https://link.v-thomas.me/github'
                target='_blank'
              >
                <Underline>Vincent Thomas</Underline>
              </LinkNotStyled>
            </TextNormal>
          </div>
        </div>
      </div>
    </div>
  );
};
