import React from "react";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";
import { useHistory } from "Contexts";
import {
  RequestBase,
  RequestContainer,
  Request_Navigation,
  Request_Background,
} from "../shared/request";
import {
  RequestEmail_Input,
  RequestEmail_Button,
} from "./historyRequest_Email/index";

export const HistoryRequest_Email = ErrorPicker(() => {
  const { email, setEmail } = useHistory("");

  const render = (
    <RequestBase>
      <RequestContainer>
        <Request_Navigation showBack={true} />
        <Container>
          <Text>의뢰 내역을 확인하기 위한 이메일을 입력해주세요</Text>
          <RequestEmail_Input email={email} setEmail={setEmail} />
          <RequestEmail_Button email={email} />
        </Container>
      </RequestContainer>
      <Request_Background />
    </RequestBase>
  );
  return render;
}, ["HistoryRequest_Email"]);

const Container = styled.div`
  padding: 0 24px;
`;
const Text = styled.p`
  margin-top: 83px;
  font-weight: 900;
  text-align: center;
`;
