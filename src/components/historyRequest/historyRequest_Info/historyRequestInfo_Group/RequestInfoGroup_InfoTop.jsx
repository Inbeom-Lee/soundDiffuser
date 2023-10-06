import React from "react";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";

export const RequestInfoGroup_InfoTop = ErrorPicker(
  ({ email, timeRequested }) => {
    const getDate =
      timeRequested && new Date(timeRequested).toLocaleDateString("ko-kr");

    const render = (
      <Container>
        <Title>{email}님의 의뢰내역서입니다.</Title>
        <TextDate>{getDate}</TextDate>
      </Container>
    );
    return render || null;
  },
  ["RequestInfoGroup_InfoTop"]
);

const Container = styled.div`
  padding: 0 5px 16px;
  border-bottom: 1px solid ${(props) => props.theme.color.grey4};
`;
const Title = styled.h4`
  font-family: "appleSD";
  font-size: 13px;
  font-weight: 500;
  text-align: center;
`;
const TextDate = styled.p`
  margin-top: 20px;
  font-family: "appleSD";
  font-size: 11px;
  color: ${(props) => props.theme.color.grey4};
`;
