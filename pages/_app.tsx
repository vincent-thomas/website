import type { AppProps } from "next/app";
import "styles/globals.scss";
import styled from "styled-components";
import { Banner } from "core/ui";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Core = styled.div`
  background-color: var(--clr-light-background);
`;

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({
      offset: 450,
      delay: 50
    });
    Aos.refresh();
  }, []);

  return (
    <>
      <Banner link={"//pureforms.net"} data-test='banner-pureforms'>
        Checkout PureForms, a developer-friendly alternative to Typeform. Sign
        up for the waitlist today!
      </Banner>

      <Core>
        <Component {...pageProps} />
      </Core>
    </>
  );
}

export default MyApp;
