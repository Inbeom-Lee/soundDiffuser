import styled from "styled-components";
import { RequestBottomContainer } from "../../shared/request";

export const Music_Container = styled.div`
  padding: 0 27px 20px;
`;
export const Music_Text = styled.p`
  margin-top: 110px;
  font-weight: 900;
`;
export const Music_BottomContainer = styled(RequestBottomContainer)`
  padding-top: 15px;
  background: ${(props) => props.theme.color.grey1};
  border-top: 0.5px solid ${(props) => props.theme.color.grey4};
`;
