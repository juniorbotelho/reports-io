import React from "react"
import { AppProps } from "next/app"

import { ThemeProvider, useManager } from "@Hooks/themes/Theme"
import { GlobalStyle } from "@Styles/GlobalStyle"

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const defaultTheme = useManager()

  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
