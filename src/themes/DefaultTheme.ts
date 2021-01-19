import { theme } from "@Events/Theme"

export class Theme {
  /**
   * Variant model which is responsible for rendering
   * the main data type within public objects.
   */
  private variants = {
    primary: "",
    secondary: "",
    sucess: "",
    danger: "",
    warning: "",
    info: "",
    light: "",
    dark: ""
  }

  public colors = {
    ...this.variants,
    primary: "hsl(171, 100%, 41%)",
    secondary: "hsl(0, 0%, 4%)",
    sucess: "hsl(141, 53%, 53%)",
    danger: "hsl(348, 100%, 61%)",
    warning: "hsl(48, 100%, 67%)",
    info: "hsl(204, 86%, 53%)",
    light: "hsl(0, 0%, 96%)",
    dark: "hsl(0, 0%, 21%)",
    ...this.optionals?.colors
  }

  public backgrounds = {
    dark: "hsl(0, 0%, 4%)",
    light: "hsl(0, 0%, 100%)",
    ...this.optionals?.backgrounds
  }

  public shades = {
    bis: "hsl(0, 0%, 7%)",
    darker: "hsl(0, 0%, 21%)",
    lighter: "hsl(0, 0%, 86%)",
    white: "hsl(0, 0%, 98%)"
  }

  /**
   *
   * This is the context for adding new styles as needed.
   * @param ctx - Context
   */
  constructor(
    private ctx?: ["colors" | "backgrounds" | "shades", string, string],
    private optionals?: IOptionalsTheme
  ) {
    if (ctx) {
      const [context, attribute, value] = this.ctx

      // Define new properties and values in theme
      Object.defineProperty(this[context], attribute, { value })
    }
  }

  public themeNotifyAll() {
    theme.emit("notify", this)
  }
}
