import React, { useState, useEffect, useMemo, useCallback } from "react";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";
import { useRequest } from "Contexts";
import { dummy_ListYoutube } from "Constants";
import {
  RequestBase,
  RequestContainer,
  RequestBottomContainer,
  Request_Navigation,
  Request_BottomButton,
} from "../shared/request";
import { RequestRequirementsEditor_Group } from "./newRequest_EditingDetails/index";

export const NewRequest_EditingDetails = ErrorPicker(() => {
  const [isEdited, setIsEdited] = useState(false);
  const { dataRequest, setDataRequest } = useRequest();
  const { listReference } = dataRequest || {};

  // useEffect(() => {
  //   const dummy1 = dummy_ListYoutube[0];
  //   const dummy2 = dummy_ListYoutube[1];
  //   const dummy3 = dummy_ListYoutube[2];
  //   setDataRequest((prev) => ({
  //     ...(prev || {}),
  //     listReference: {
  //       [dummy1.id.videoId]: {
  //         ...dummy1,
  //         dataEdit: {
  //           speed: "3",
  //           style: "3",
  //           timing: "3",
  //           mood: "3",
  //           clarity: "3",
  //           temperature: "3",
  //         },
  //       },
  //       [dummy2.id.videoId]: {
  //         ...dummy2,
  //         dataEdit: {
  //           speed: "3",
  //           style: "3",
  //           timing: "3",
  //           mood: "3",
  //           clarity: "3",
  //           temperature: "3",
  //         },
  //       },
  //       [dummy3.id.videoId]: {
  //         ...dummy3,
  //         dataEdit: {
  //           speed: "3",
  //           style: "3",
  //           timing: "3",
  //           mood: "3",
  //           clarity: "3",
  //           temperature: "3",
  //         },
  //       },
  //     },
  //   }));
  // }, []);

  const arrayReference = useMemo(() => {
    const getArray = listReference && Object.values(listReference);
    return getArray;
  }, [listReference]);

  const handleIsEdit = useCallback(() => !isEdited && setIsEdited(true), []);

  const render = (
    <RequestBase>
      <RequestContainer>
        <Request_Navigation />
        <Container>
          <SubText>마지막 단계입니다!</SubText>
          <Text>결과물 희망 컨셉을 세부 조정할 수 있어요.</Text>
          {arrayReference?.map((ref, i) => (
            <RequestRequirementsEditor_Group
              key={ref.id.videoId}
              reference={ref}
              index={i}
              setDataRequest={setDataRequest}
              handleIsEdit={handleIsEdit}
            />
          ))}
        </Container>
      </RequestContainer>
      <RequestBottomContainer>
        <Request_BottomButton
          isActive={isEdited}
          routeNext="/newRequest/personalDetails"
          textButton="다음"
        />
      </RequestBottomContainer>
    </RequestBase>
  );
  return render;
}, ["NewRequest_EditingDetails"]);

const Container = styled.div`
  padding: 0 24px;
`;
const SubText = styled.p`
  margin-top: 70px;
  font-weight: 700;
  font-size: 10px;
`;
const Text = styled.p`
  margin: 5px 0 16px;
  font-weight: 900;
`;
