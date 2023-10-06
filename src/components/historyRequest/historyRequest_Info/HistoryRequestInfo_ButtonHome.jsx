import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";
import { Button_Primary } from "Components";

export const HistoryRequestInfo_ButtonHome = ErrorPicker(() => {
  const naviage = useNavigate();

  const handleHome = () => naviage(`/`);

  const render = <Button onClick={handleHome}>홈으로 돌아가기</Button>;
  return render;
}, ["HistoryRequestInfo_ButtonHome"]);

const Button = styled(Button_Primary)`
  margin: 34px auto 0;
`;
