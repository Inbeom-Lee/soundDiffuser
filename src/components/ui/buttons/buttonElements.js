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

  &:hover {
    background: ${(props) => props.theme.color.primary};
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;
export const Button_Type1 = styled(Button_Primary)`
  border: 2px solid ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.primary};
  background: #fff;

  &:hover {
    color: ${(props) => props.theme.contrast};
    background: ${(props) => props.theme.color.primary};
  }
`;
export const Button_Delete = styled(Button_Primary)`
  background: ${(props) => props.theme.color.background.white};

  &:hover {
    background: ${(props) => props.theme.color.background.white};
  }
`;
export const Button_Secondary = styled.button`
  width: 100%;
  height: 45px;
  font-size: 15px;
  color: ${(props) => props.theme.color.grey1};
  border: 1px solid ${(props) => props.theme.color.grey4};
  background: #fff;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;
export const Button_Third = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  color: ${(props) => props.theme.color.grey1};
  background: ${(props) => props.theme.color.grey5};
  border: 1px solid ${(props) => props.theme.color.grey4};
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }
`;
export const Button_Fourth = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  color: ${(props) => props.theme.color.primary};
  background: ${(props) => props.theme.color.secondaryBlue.blue5};
  border: none;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }
`;
export const Button_Green = styled(Button_Primary)`
  background: ${(props) => props.theme.color.third[800]};

  &:hover {
    background: ${(props) => props.theme.color.third[1000]};
  }
`;

export const Button_SecondaryToPrimary = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 45px;
  font-size: 15px;
  font-weight: 500;
  border: 1px solid;
  border-radius: 4px;
  transition: 0.5s;

  ${(props) =>
    props.$active
      ? css`
          color: #fff;
          background: ${props.theme.color.primary};
          border-color: ${props.theme.color.primary};
        `
      : css`
          color: ${props.theme.color.text.black};
          background: #fff;
          border-color: ${props.theme.color.grey4};
        `}

  &:hover {
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
export const Button_DisableToSecondary = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background: #fff;
  border: 1px solid ${(props) => props.theme.color.grey4};
  border-radius: 4px;
  transition: 0.5s;

  ${(props) =>
    props.$active
      ? css`
          color: ${(props) => props.theme.color.grey1};
        `
      : css`
          pointer-events: none;
          color: ${(props) => props.theme.color.grey3};
        `}

  &:hover {
    cursor: pointer;
  }
`;
export const Button_SecondaryToDelete = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 45px;
  border: 1px solid;
  border-radius: 4px;
  transition: 0.5s;

  ${(props) =>
    props.$active
      ? css`
          color: #fff;
          background: ${(props) => props.theme.color.background.white};

          &:hover {
            background: ${(props) => props.theme.color.background.white};
          }
        `
      : css`
          color: ${props.theme.color.text.black};
          background: #fff;
          border-color: ${props.theme.color.grey4};
        `}

  &:hover {
    cursor: pointer;
  }
`;

export const Button_SecondaryToFourth = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  border: 1px solid;
  border-radius: 4px;
  transition: 0.5s;

  ${(props) =>
    props.$active
      ? css`
          color: ${props.theme.color.main[500]};
          background: ${props.theme.color.main[50]};
          border-color: ${props.theme.color.main[100]};
        `
      : css`
          color: ${props.theme.color.text.black};
          background: #fff;
          border-color: ${props.theme.color.grey4};
        `}

  &:hover {
    cursor: pointer;
  }
`;
export const Button_SecondaryToFifth = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background: #fff;
  border: 1px solid;
  border-radius: 4px;
  transition: 0.5s;

  ${(props) =>
    props.$active
      ? css`
          color: ${props.theme.color.primary};
          border-color: ${props.theme.color.primary};
        `
      : css`
          color: ${props.theme.color.text.black};
          border-color: ${props.theme.color.grey4};
        `}

  &:hover {
    cursor: pointer;
  }
`;
