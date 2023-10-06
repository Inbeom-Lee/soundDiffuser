import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { v4 } from "uuid";
import ErrorPicker from "ErrorPicker";
import { writeFS } from "Firebase";
import { Button_DisableToPrimary } from "Components";

export const RequestPersonalDetails_Button = ErrorPicker(
  ({ dataRequest }) => {
    const naviage = useNavigate();

    const { email } = dataRequest || {};

    const checkEmail = useMemo(() => {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const testEmail = pattern.test(email);

      return testEmail;
    }, [email]);

    const handleComplete = async () => {
      if (confirm("문의를 완료하시겠습니까?")) {
        try {
          const uidRequest = v4();
          const newRequest = {
            ...dataRequest,
            uid: uidRequest,
            timeRequested: new Date().getTime(),
          };

          await writeFS(newRequest, ["requests", uidRequest]);

          naviage(`/historyRequest/completed/${uidRequest}`);
        } catch (err) {
          console.log(err);
        }
      }
    };

    const render = (
      <Button $active={checkEmail} onClick={handleComplete}>
        다음
      </Button>
    );
    return render;
  },
  ["RequestPersonalDetails_Button"]
);

const Button = styled(Button_DisableToPrimary)`
  margin: 29px auto 0;
`;
