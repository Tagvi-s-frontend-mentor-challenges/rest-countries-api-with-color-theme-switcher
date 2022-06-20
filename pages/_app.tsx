import "@styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import themes, { Theme } from "@styles/themes";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    ${({ theme: { text, bg } }: { theme: Theme }) =>
      `color: ${text}; background-color: ${bg}`};
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <Component {...{ ...pageProps, setTheme }} />
    </ThemeProvider>
  );
}

export default MyApp;
