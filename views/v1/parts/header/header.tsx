import { ProfileImage } from "@/views/v1/components/profile-image/profile-image";
import { Left } from "./components/left/left";
import S from "./header.module.scss";

export const Header = () => {
  return (
    <div className={S["header-wrapper"]}>
      <Left />
      <ProfileImage />
    </div>
  );
};