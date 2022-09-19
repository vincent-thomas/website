import type { AppProps } from "next/app";
import "../styles/globals.scss";
import { Banner } from "lib/ui";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Footer } from "shared/footer/footer";

function App({ Component, pageProps }: AppProps) {
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
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;
