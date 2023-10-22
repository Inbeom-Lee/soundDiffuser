import React, { useState } from "react";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";
import { Div_Opacity } from "Components";
import {
  RequestInfoGroup_InfoTop,
  RequestInfoGroup_InfoMain,
  RequestInfoGroup_Textarea,
  RequestInfoGroup_ButtonAddInstruction,
} from "./historyRequestInfo_Group/index";

export const HistoryRequestInfo_Group = ErrorPicker(
  ({ email, request }) => {
    const {
      uid: uidRequest,
      listReference,
      musicPurpose,
      musicMood,
      timeRequested,
      instruction,
    } = request || {};

    const arrayReference = listReference && Object.values(listReference);

    const render = (
      <Container>
        <RequestInfoGroup_InfoTop
          uidRequest={uidRequest}
          timeRequested={timeRequested}
        />
        <RequestInfoGroup_InfoMain
          arrayReference={arrayReference}
          musicPurpose={musicPurpose}
          musicMood={musicMood}
          instruction={instruction}
        />
      </Container>
    );
    return render || null;
  },
  ["HistoryRequestInfo_Group"]
);

const Container = styled(Div_Opacity)`
  margin-top: 19px;
  padding: 20px 24px;
  width: 100%;
  background: ${(props) => props.theme.color.grey2};
  border: 0.5px solid ${(props) => props.theme.color.border.white};
  border-radius: 8px;
`;
