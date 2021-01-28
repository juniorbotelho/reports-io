import styled from "styled-components"

export const Container = styled.div`
  display: block;

  div.Content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 600px;
    position: relative;
  }

  header.Header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1.Title {
      font-size: 2em;
      text-transform: lowercase;
      text-align: center;
      position: absolute;
      left: 0;

      @media only screen and (max-width: 800px) {
        position: absolute;
        left: 0;
      }
    }

    svg.Menu {
      display: none;
      min-width: 32px;
      min-height: 32px;

      @media only screen and (max-width: 800px) {
        display: block;
        width: auto;
      }
    }

    Nav.Navbar {
      ul.List {
        list-style: none;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        li.Link {
          display: inline-block;
          margin: 0 1em;
          color: ${() => "hsl(0deg 0% 85% / 80%)"};
          font-weight: 400;

          a.Href {
            color: ${() => "hsl(0deg 0% 85% / 80%)"};
            text-decoration: none;
          }
        }
      }

      /* TODO: Add a burger menu for smaller screens */
      @media only screen and (max-width: 800px) {
        position: absolute;
        left: 0;

        ul.List {
          position: relative;
          z-index: -999;

          &::before {
            display: block;
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            background: ${(props) => props.theme.backgrounds.dark};
          }
        }
      }

      @media only screen and (max-width: 600px) {
        display: none;
        width: 0;
      }
    }

    button.Button {
      width: 130px;
      border-radius: 10px;
      background: ${(props) => props.theme.backgrounds.light};
      font-weight: 600;
      font-size: 0.8em;

      @media only screen and (max-width: 800px) {
        display: none;
        width: 0;
      }
    }
  }
`
