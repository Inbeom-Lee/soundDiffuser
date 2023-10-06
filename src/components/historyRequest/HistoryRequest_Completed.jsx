import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";
import { readDocFS } from "Firebase";
import { Div_Opacity } from "Components";
import {
  RequestBase,
  RequestContainer,
  Request_Navigation,
  RequestBottomContainer,
  Request_BottomButton,
  Request_Background,
} from "../shared/request";
import {
  RequestCompleted_InfoTop,
  RequestCompleted_InfoMain,
  RequestCompleted_Textarea,
  RequestCompleted_ButtonAddInstruction,
} from "./historyRequest_Completed/index";

export const HistoryRequest_Completed = ErrorPicker(() => {
  const [request, setRequest] = useState();
  const [instruction, setInstruction] = useState("");
  const { uidRequest } = useParams();
  const { listReference, musicPurpose, musicMood, timeRequested } =
    request || {};
  const arrayReference = listReference && Object.values(listReference);

  useEffect(() => {
    const setData = async () => {
      try {
        const getData = await readDocFS(["requests", uidRequest]);
        getData && setRequest(getData);
      } catch (err) {
        console.log(err);
      }
    };
    uidRequest && setData();
  }, []);

  const render = (
    <RequestBase>
      <RequestContainer style={{ padding: "0 23px 50px" }}>
        <Request_Navigation />
        <Title>의뢰가 완료되었습니다.</Title>
        <Text>2~3일 내로 담당 PM이 연락드리겠습니다.</Text>
        <InfoContainer>
          <RequestCompleted_InfoTop timeRequested={timeRequested} />
          <RequestCompleted_InfoMain
            arrayReference={arrayReference}
            musicPurpose={musicPurpose}
            musicMood={musicMood}
          />
          <RequestCompleted_Textarea
            instruction={instruction}
            setInstruction={setInstruction}
          />
          <RequestCompleted_ButtonAddInstruction
            uidRequest={uidRequest}
            instruction={instruction}
          />
        </InfoContainer>
      </RequestContainer>
      <BottomContainer>
        <Request_BottomButton isActive={true} routeNext="/" textButton="다음" />
      </BottomContainer>
      <Request_Background />
    </RequestBase>
  );
  return render || null;
}, ["HistoryRequest_Completed"]);

const Title = styled.h4`
  margin-top: 64px;
  font-weight: 900;
  text-align: center;
`;
const Text = styled.p`
  margin-top: 10px;
  font-family: "appleSD";
  font-weight: 500;
  font-size: 12px;
  text-align: center;
`;
const InfoContainer = styled(Div_Opacity)`
  margin-top: 19px;
  padding: 20px 24px;
  width: 100%;
  background: ${(props) => props.theme.color.grey2};
  border: 0.5px solid ${(props) => props.theme.color.border.white};
  border-radius: 8px;
`;
const BottomContainer = styled(RequestBottomContainer)`
  padding-top: 15px;
  background: ${(props) => props.theme.color.grey1};
  border-top: 0.5px solid ${(props) => props.theme.color.grey4};
`;
