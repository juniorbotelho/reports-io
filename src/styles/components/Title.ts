import styled from "styled-components"

export const Title = styled.h1`
  &.Title_Register,
  &.Title_Login {
    font-size: 3em;
    margin-bottom: 1rem;
    letter-spacing: 2px;

    @media only screen and (max-width: 400px) {
      font-size: 2.6em;
    }
  }
`
