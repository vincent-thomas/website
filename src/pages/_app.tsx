import type { AppProps } from "next/app";
import "@styles/globals.css";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "../theme";
import { Banner } from "core/ui";

const Core = styled.div`
  background-color: var(--clr-background-primary);
  max-width: 100vw;

  min-height: 100vh;
  padding: 0;
  margin: 0;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Banner link={"//pureforms.net"}>
        Checkout PureForms, a developer-friendly alternative to Typeform! Sign
        up for the waitlist today!
      </Banner>

      <Core>
        <Component {...pageProps} />
      </Core>
    </ThemeProvider>
  );
}

export default MyApp;
