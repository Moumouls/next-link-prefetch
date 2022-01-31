import { NoSsr } from "@mui/base";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import { theme } from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NoSsr>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </NoSsr>
  );
}

export default MyApp;
