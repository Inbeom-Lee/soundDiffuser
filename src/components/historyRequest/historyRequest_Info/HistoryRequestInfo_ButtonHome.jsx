import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";
import { Button_Primary } from "Components";

export const HistoryRequestInfo_ButtonHome = ErrorPicker(() => {
  const naviage = useNavigate();

  const handleHome = () => naviage(`/`);

  const render = (
    <Container>
      <Button onClick={handleHome}>돌아가기</Button>
    </Container>
  );
  return render;
}, ["HistoryRequestInfo_ButtonHome"]);

const Container = styled.div`
  padding-top: 24px;
  width: 100%;
  height: 68px;
  background: ${(props) => props.theme.color.grey1};
  border-top: 1px solid ${(props) => props.theme.color.grey4};
`;
const Button = styled(Button_Primary)`
  margin: 0 auto;
`;
