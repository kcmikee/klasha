import GlobalStyles from "@/styles/GlobalStyles";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />

      <Component {...pageProps} />
    </>
  );
}
