import styled from "styled-components"

export const Input = styled.input`
  &.Input_Register,
  &.Input_Login {
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.dark};
    outline: 0;
    width: 350px;
    height: 40px;
    padding: 1em 0rem;
    font-size: 1rem;
    transition: all 50ms ease-in-out;

    &[data-error] {
      border-bottom: 1px solid ${(props) => props.theme.colors.danger};
    }

    &:focus {
      border-bottom: 1px solid ${(props) => props.theme.colors.info};
      outline: 0;
    }

    &::placeholder {
      color: ${(props) => props.theme.backgrounds.dark};
      font-size: 1.2em;
    }

    &[data-error]::placeholder {
      color: ${(props) => props.theme.colors.danger};
      font-size: 1.2em;
    }

    @media only screen and (max-width: 400px) {
      width: 300px;
    }
  }
`
