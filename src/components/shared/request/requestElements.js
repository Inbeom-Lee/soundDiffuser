import styled from "styled-components";
import { Div_Opacity, Button_Primary } from "Components";

export const RequestBase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.color.grey1};
  overflow: hidden auto;
`;
export const RequestContainer = styled(Div_Opacity)`
  width: 100%;
  max-width: 500px;
  z-index: 1;
`;
export const RequestWrapper = styled.div`
  padding: 0 20px 20px;
`;
export const RequestBottomContainer = styled(RequestContainer)`
  position: sticky;
  bottom: 0;
`;
export const RequestButton = styled(Button_Primary)`
  position: fixed;
  width: 100%;
`;
export const RequestTitle = styled.h4`
  font-size: 17px;
  margin-top: 20px;
`;
export const RequestSubText = styled.p`
  margin: 5px 0 40px;
  font-size: 14px;
  color: ${(props) => props.theme.color.grey1_5};
`;
