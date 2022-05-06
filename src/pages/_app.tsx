import type { AppProps } from "next/app";
import "../globals.css";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "../theme";

const Core = styled.div`
  background-color: ${({ theme }) => theme.background.primary};
  max-width: 100vw;

  min-height: 100vh;
  padding: 0;
  margin: 0;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Core>
        <Component {...pageProps} />
      </Core>
    </ThemeProvider>
  );
}

export default MyApp;
