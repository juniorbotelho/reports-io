import styled from "styled-components"

export const Input = styled.input`
  &.Input_Register,
  &.Input_Login {
    border: 1px solid ${(props) => props.theme.shades.lighter};
    border-radius: 5px;
    outline: 0;
    width: 350px;
    height: 50px;
    padding: 1em 0.8rem;
    font-size: 1rem;
    transition: all 50ms ease-in-out;
    background: ${(props) => props.theme.shades.lighter};
    color: ${(props) => props.theme.colors.dark};

    &[data-error] {
      border: 1px solid ${(props) => props.theme.colors.danger};
    }

    &:focus {
      border: 1px solid ${(props) => props.theme.colors.primary};
      box-shadow: 0 0 2px 2px ${(props) => props.theme.colors.primary};
      outline: 0;
    }

    &::placeholder {
      color: ${(props) => props.theme.shades.darker};
      font-size: 1em;
    }

    &[data-error]::placeholder {
      color: ${(props) => props.theme.colors.danger};
      font-size: 1em;
    }

    @media only screen and (max-width: 400px) {
      width: 300px;
    }
  }
`
