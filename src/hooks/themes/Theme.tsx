import React, { createContext, useState } from "react"
import { ThemeProvider as Provider } from "styled-components"
import { Theme } from "@Themes/DefaultTheme"

// Interfaces
interface ManagerContext {
  theme: Theme
  setTheme(props: Theme): void
}

declare interface Manager {
  theme: ManagerContext
}

interface OptionalTheme {
  colors?: { [key: string]: string }
  backgrounds?: { [key: string]: string }
}

export const ThemeContext = createContext<ManagerContext>(null)

export const ThemeProvider: React.FC<Manager> = ({ children, theme }) => {
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
  optionals?: OptionalTheme
): ManagerContext => {
  const defaultTheme = new Theme(ctx, optionals)

  const [theme, setTheme] = useState(defaultTheme)

  return { theme, setTheme }
}
