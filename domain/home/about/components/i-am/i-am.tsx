import { useLang } from "@langs";
import { Button, Title } from "lib/components";
import Shared from "../../about.module.scss";

import S from "./i-am.module.scss";

export const IAmC = () => {
  const [langs] = useLang();
  return (
    <div className='flex flex-col items-start' data-test='about-me-iam'>
      <Title size='info'>{langs.iAm}...</Title>
      <Title size='large' className={`${Shared["max-title-size"]}`}>
        {langs.one}{" "}
        <span className='relative'>
          {langs.yearOld}
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
        Swedish guy
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
