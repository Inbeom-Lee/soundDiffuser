import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";
import { Button_DisableToPrimary } from "Components";

export const Request_BottomButton = ErrorPicker(
  ({ isActive, routeNext, textButton, handler }) => {
    const naviage = useNavigate();

    const handleNext = async () => {
      await handler?.();
      naviage(routeNext);
    };

    const render = (
      <Container>
        <Button $active={isActive} onClick={handleNext}>
          {textButton}
        </Button>
      </Container>
    );
    return render || null;
  },
  ["Request_BottomButton"]
);

const Container = styled.div`
  padding-top: 9px;
  width: 100%;
  height: 53px;
  background: ${(props) => props.theme.color.grey1};
`;
const Button = styled(Button_DisableToPrimary)`
  margin: 0 auto;
`;
