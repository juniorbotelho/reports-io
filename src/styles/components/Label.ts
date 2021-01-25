import styled from "styled-components"

export const Label = styled.label`
  &.Label_Undo {
    cursor: pointer;
    display: inline-block !important;

    &.Only {
      margin-top: 0.75em;
    }

    &:hover {
      .Link_Register {
        color: ${(props) => props.theme.colors.light};
        text-decoration: underline;
      }
    }
  }

  &.Label_Register,
  &.Label_Login {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.6em;
    font-size: 1.2em;
    line-height: 35px;

    &.Label_Input {
      margin-bottom: -0.25em;
    }
  }
`
