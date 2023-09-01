import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { UIProvider } from "@/context/ui";
import { EntriesProvider } from "@/context/entries";
import { darkTheme, lightTheme } from "@/themes";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <EntriesProvider>
      <UIProvider>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </UIProvider>
    </EntriesProvider>
  );
}
