import styled from "styled-components"

export const Div = styled.div`
  &.Card {
    width: 800px;

    &.Information {
      width: 600px;
      margin: 0 auto;
      border-radius: 5px;
      padding: 2em;
      margin-top: -2em;

      @media only screen and (max-width: 768px) {
        width: 400px;
      }

      @media only screen and (max-width: 400px) {
        width: 350px;
      }
    }

    .Card_Header {
      padding-bottom: 1.5em;
      color: ${(props) => props.theme.colors.primary};
    }

    .Card_Body {
    }
  }
`
