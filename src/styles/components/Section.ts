import styled from "styled-components"

export const Section = styled.section`
  &.Section_Input {
    display: flex !important;
    flex-direction: column;
  }

  &.Section_Register {
    display: flex;
    align-items: center;
    position: relative;

    &.Message {
      display: block;
      width: 400px;
    }

    &.Form {
      display: block;
    }

    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }

    @media only screen and (max-width: 600px) {
      &.Message {
        width: 300px;
      }
    }
  }
`
