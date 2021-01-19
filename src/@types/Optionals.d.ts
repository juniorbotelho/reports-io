declare interface IContructorTheme {
  ctx?: ["colors" | "backgrounds", string, string]
  optionals?: IOptionalsTheme
}

declare interface IOptionalsTheme {
  colors?: { [key: string]: string }
  backgrounds?: { [key: string]: string }
}
