import React from "react";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";
import { useRequest } from "Contexts";
import {
  RequestBase,
  RequestContainer,
  Request_Navigation,
} from "../shared/request";
import {
  RequestPersonalDetails_Email,
  RequestPersonalDetails_Button,
} from "./newRequest_PersonalDetails/index";

export const NewRequest_PersonalDetails = ErrorPicker(() => {
  const { dataRequest, setDataRequest } = useRequest();
  const { email } = dataRequest || {};

  const render = (
    <RequestBase>
      <RequestContainer>
        <Request_Navigation showBack={true} />
        <Container>
          <Text>마지막 단계가 남았습니다</Text>
          <SubText>의뢰 내역서를 발송할 이메일을 입력해주세요</SubText>
          <RequestPersonalDetails_Email
            email={email}
            setDataRequest={setDataRequest}
          />
          <RequestPersonalDetails_Button dataRequest={dataRequest} />
          <TextGuide>의뢰 내역서를 바로 발송해드립니다.</TextGuide>
        </Container>
      </RequestContainer>
    </RequestBase>
  );
  return render || null;
}, ["NewRequest_PersonalDetails"]);

const Container = styled.div`
  padding: 0 24px;
`;
const Text = styled.p`
  margin-top: 57px;
  font-weight: 900;
  text-align: center;
`;
const SubText = styled.p`
  margin-top: 11px;
  font-family: "appleSD";
  font-weight: 500;
  font-size: 12px;
  text-align: center;
`;
const TextGuide = styled(SubText)`
  margin-top: 18px;
  font-size: 10px;
`;
