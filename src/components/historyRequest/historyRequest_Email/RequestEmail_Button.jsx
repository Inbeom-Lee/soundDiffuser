import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";
import { Button_DisableToPrimary } from "Components";

export const RequestEmail_Button = ErrorPicker(
  ({ email }) => {
    const naviage = useNavigate();

    const checkEmail = useMemo(() => {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const testEmail = pattern.test(email);

      return testEmail;
    }, [email]);

    const handleCheck = () => naviage(`/historyRequest/info`);

    const render = (
      <Button $active={checkEmail} onClick={handleCheck}>
        의뢰내역 확인하기
      </Button>
    );
    return render;
  },
  ["RequestEmail_Button"]
);

const Button = styled(Button_DisableToPrimary)`
  margin: 29px auto 0;
`;
