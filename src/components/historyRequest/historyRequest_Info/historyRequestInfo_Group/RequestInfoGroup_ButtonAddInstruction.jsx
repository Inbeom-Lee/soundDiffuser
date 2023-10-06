import React from "react";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";
import { updateFS } from "Firebase";
import { Button_DisableToPrimary } from "Components";

export const RequestInfoGroup_ButtonAddInstruction = ErrorPicker(
  ({ uidRequest, instruction }) => {
    const isButtonActive = Boolean(uidRequest && instruction);

    const handleComplete = async () => {
      if (confirm("추가 요구사항을 남기시겠습니까?")) {
        try {
          const newRequest = {
            instruction,
          };

          await updateFS(newRequest, ["requests", uidRequest]);

          alert("추가 완료");
        } catch (err) {
          console.log(err);
        }
      }
    };

    const render = (
      <Button $active={isButtonActive} onClick={handleComplete}>
        추가 요구사항 남기기
      </Button>
    );
    return render;
  },
  ["RequestInfoGroup_ButtonAddInstruction"]
);

const Button = styled(Button_DisableToPrimary)`
  margin: 21px auto 0;
`;
