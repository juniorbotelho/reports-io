type Theme = import("styled-components").DefaultTheme

declare type HookNotification = { message: string; seconds?: number }[]

declare interface IHookManagerCtx {
  theme: Theme
  setTheme(props: Theme): void
}

declare interface IHookManager {
  theme: IHookManagerCtx
}
