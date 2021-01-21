import styled from "styled-components"

export const Button = styled.button`
  &.Button_Register {
    display: block;
    width: 100%;
    height: 40px;
    outline: 0;
    border: none;
    border-radius: 2.5px;
    font-size: 1rem;
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.dark};
    margin-top: 0.2em;
    cursor: pointer;
  }
`
