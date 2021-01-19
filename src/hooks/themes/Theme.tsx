import React, { createContext, useState } from "react"
import { ThemeProvider as Provider } from "styled-components"

import { Theme } from "@Themes/DefaultTheme"

export const ThemeContext = createContext<IHookManagerCtx>(null)

export const ThemeProvider: React.FC<IHookManager> = ({ children, theme }) => {
  return (
    <ThemeContext.Provider value={theme}>
      <Provider theme={theme.theme}>
        <>{children}</>
      </Provider>
    </ThemeContext.Provider>
  )
}

export const useManager = (
  ctx?: ["colors" | "backgrounds", string, string],
  optionals?: IOptionalsTheme
): IHookManagerCtx => {
  const defaultTheme = new Theme(ctx, optionals)

  const [theme, setTheme] = useState(defaultTheme)

  return { theme, setTheme }
}
