import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.backgrounds.dark};
    color: ${(props) => props.theme.colors.light};
    font: 400 16px Roboto, sans-serif;
  }

  .error {
    color: ${(props) => props.theme.colors.danger};
    width: 350px;
    font-size: 0.8em;
  }
`
