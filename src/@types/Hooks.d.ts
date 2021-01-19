type Theme = import("styled-components").DefaultTheme

declare interface IHookManagerCtx {
  theme: Theme
  setTheme(props: Theme): void
}

declare interface IHookManager {
  theme: IHookManagerCtx
}
