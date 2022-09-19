import { useLang } from "@langs";
import { Button } from "@lib/components";
import S from "./navbar.module.scss";

export const Navbar = () => {
  const [langs, setLang, lang] = useLang();

  return (
    <div className={S["navbar"]}>
      <Button
        onClick={() => setLang(lang === "swe" ? "eng" : "swe")}
        type='primary'
      >
        {langs.changeLanguage}
      </Button>
      <h1 className={S["logo"]}>VT</h1>
    </div>
  );
};
