import React from "react";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";

export const RequestMusic_Group = ErrorPicker(
  ({ purpose, isActive, handleMusic }) => {
    const render = (
      <Container $active={isActive} onClick={handleMusic}>
        {purpose}
      </Container>
    );
    return render;
  },
  ["RequestMusic_Group"]
);

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  padding: 0 ${(props) => (props.$active ? "16.5px" : "18px")};
  height: 31px;
  font-family: "appleSD";
  font-weight: 700;
  font-size: 10px;
  background: ${(props) => props.theme.color.grey1};
  border: ${(props) => (props.$active ? "2px" : "0.5px")} solid
    ${(props) =>
      props.$active
        ? props.theme.color.secondary[400]
        : props.theme.color.border.white};
  border-radius: 8px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
  }
`;
