import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { Center } from "../components/Center";
import GlobalStyle from "../styles/globalStyles";
import theme from "../styles/theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Sunnyside agency landing page</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Center>
          <Component {...pageProps} />
        </Center>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
