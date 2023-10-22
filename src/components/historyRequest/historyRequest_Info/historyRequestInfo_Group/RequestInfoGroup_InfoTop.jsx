import React from "react";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";

export const RequestInfoGroup_InfoTop = ErrorPicker(
  ({ uidRequest, timeRequested }) => {
    const getDate =
      timeRequested && new Date(timeRequested).toLocaleDateString("ko-kr");

    const render = (
      <Container>
        <Title>의뢰 요구사항 보기</Title>
        <Text>{getDate}</Text>
        <Text>{uidRequest}</Text>
      </Container>
    );
    return render || null;
  },
  ["RequestInfoGroup_InfoTop"]
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
  font-size: 13px;
  font-weight: 700;
`;
const Text = styled.p`
  font-family: "appleSD";
  font-size: 11px;
  color: ${(props) => props.theme.color.grey4};
`;
