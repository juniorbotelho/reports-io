import styled from "styled-components"

export const Label = styled.label`
  &.Label_Undo {
    cursor: pointer;
    display: inline-block !important;

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
    margin-bottom: 0.8em;
    font-size: 1.2em;
    line-height: 35px;
  }
`
