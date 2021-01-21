import styled from "styled-components"

export const Link = styled.a`
  &.Link_Register,
  &.Link_Login {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.info};
    transition: all 50ms ease-in-out;
  }
`
