import S from "./navbar.module.scss";

export const Navbar = () => {
  return (
    <div className={S["navbar"]}>
      <h1 className={S["logo"]}>VT</h1>
    </div>
  );
};
