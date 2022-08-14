import { Button, Title } from "lib/components";
import Shared from "../../about.module.scss";

import S from "./i-am.module.scss";

export const IAmC = () => {
  return (
    <div className='flex flex-col items-start' data-test='about-me-iam'>
      <Title size='info'>I am...</Title>
      <Title size='large' className={`${Shared["max-title-size"]}`}>
        A{" "}
        <span className='relative'>
          15 year old
          <img
            src='/text-underline.svg'
            className={`rotate-[1.2deg] no-shadow absolute`}
            style={{
              bottom: "-0.6rem",
              position: "absolute",
              width: "200px",
              left: "0.3rem",
              zIndex: -1
            }}
            alt=''
          />
        </span>{" "}
        Swedish web-developer who likes to learn new things.
        {/* <div style={{ position: "relative" }}>
          
        </div> */}
        {/* </span>{" "} */}
      </Title>
      {/* <Button type='primary' style={{ marginTop: "0.75rem" }}>
        Read More */}
      {/* </Button> */}
    </div>
  );
};
