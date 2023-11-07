import HorizontalLine from "@/components/HorizontalLine";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import UpdateBanner from "@/components/layout/UpdateBanner";
import "@/styles/globals.css";
import theme from "@/styles/theme";
import {
  CSSReset,
  ChakraProvider,
  extendTheme,
  useColorMode,
} from "@chakra-ui/react";
import type { AppProps } from "next/app";
import React from "react";

const extendedTheme = extendTheme({
  ...theme,
  config: {
    initialColorMode: "light", // Set initial color mode to "light"
    useSystemColorMode: false,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const { colorMode } = useColorMode();

  return (
    <ChakraProvider theme={extendedTheme}>
      <div className="container">
        {/* <UpdateBanner /> */}
        <Header />
        <Component {...pageProps} />
        {/* <style global jsx>{`
          body {
            background-image: url("${colorMode === "light"
              ? "/assets/background-light.png"
              : "/assets/background-dark.png"}");
          }
        `}</style> */}

        <HorizontalLine />
        <Footer />
      </div>
    </ChakraProvider>
  );
}
