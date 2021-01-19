import "styled-components"
import { Theme } from "@Themes/DefaultTheme"

const themeProvider = new Theme()

type MyTheme = typeof themeProvider

declare module "styled-components" {
  export interface DefaultTheme extends MyTheme {}
}
