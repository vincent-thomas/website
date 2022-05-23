import type { AppProps } from "next/app";
import "styles/globals.scss";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "../theme";
import { Banner } from "core/ui";
import "kursor/dist/kursor.css";
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
    <ThemeProvider theme={DarkTheme}>
      <Banner link={"//pureforms.net"}>
        Checkout PureForms, a developer-friendly alternative to Typeform. Sign
        up for the waitlist today!
      </Banner>

      <Core>
        <Component {...pageProps} />
      </Core>
    </ThemeProvider>
  );
}

export default MyApp;
