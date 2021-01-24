import styled from "styled-components"

export const Div = styled.div`
  &.NotificationContainer {
    position: absolute;
    margin: 1em;
    top: 0;
    right: 0;
  }

  &.Notification {
    position: relative;
    background: hsl(348, 100%, 61%);
    margin-bottom: 1em;
    padding: 1em;
    width: 350px;

    div.Progress {
      position: absolute;
      top: -3px;
      left: 0;
      background: hsl(348, 80%, 60%);
      width: 100%;
      height: 5px;

      div.Bar {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #dbdbdb;
      }
    }

    p.Text {
      color: #dbdbdb;
    }
  }

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
