import React from "react";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";

export const RequestCompleted_InfoTop = ErrorPicker(
  ({ timeRequested }) => {
    const getDate =
      timeRequested && new Date(timeRequested).toLocaleDateString("ko-kr");

    const render = (
      <Container>
        <Title>의뢰 요구사항 보기</Title>
        <TextDate>{getDate}</TextDate>
      </Container>
    );
    return render || null;
  },
  ["RequestCompleted_InfoTop"]
);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 16px;
  border-bottom: 1px solid ${(props) => props.theme.color.grey4};
`;
const Title = styled.h4`
  font-family: "appleSD";
  font-size: 12px;
  font-weight: 700;
`;
const TextDate = styled.p`
  font-family: "appleSD";
  font-size: 10px;
  text-align: center;
  color: ${(props) => props.theme.color.grey4};
`;
