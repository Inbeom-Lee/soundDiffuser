import styled, { css } from "styled-components";

export const Button_Primary = styled.button`
  display: block;
  width: 184px;
  height: 32px;
  background: ${(props) => props.theme.color.primary};
  color: #fff;
  border: 0.5px solid ${(props) => props.theme.color.border.white};
  border-radius: 11px;
  font-size: 12px;
  font-weight: 700;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;
export const Button_Secondary = styled(Button_Primary)`
  color: ${(props) => props.theme.color.grey1};
  border: 1px solid ${(props) => props.theme.color.grey4};
  background: #fff;

  &:hover {
    background: ${(props) => props.theme.color.grey4};
    cursor: pointer;
  }
`;

export const Button_DisableToPrimary = styled(Button_Primary)`
  transition: 0.5s;

  ${(props) =>
    props.$active
      ? css`
          pointer-events: auto;
          background: ${props.theme.color.primary};
        `
      : css`
          pointer-events: none;
          background: ${props.theme.color.grey4};
        `}

  &:hover {
    cursor: pointer;
  }
`;
