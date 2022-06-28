import { Title } from "@/core/components";
import Shared from "../../about.module.scss";

export const IAmC = () => {
  return (
    <div className={Shared["section"]} data-test='about-me-iam'>
      <Title size='info'>I am...</Title>
      <Title
        size='large'
        className={Shared["max-title-size"]}
        style={{ zIndex: 1 }}
      >
        A{" "}
        <span
          style={{
            position: "relative"
          }}
        >
          <img
            src='/text-underline.svg'
            style={{
              position: "absolute",
              bottom: "-1.4rem",
              zIndex: -1
            }}
            alt=''
          />
        </span>{" "}
        15 year old Swedish web-developer who likes to learn new things.
      </Title>
    </div>
  );
};
