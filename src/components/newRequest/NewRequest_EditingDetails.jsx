import React, { useEffect, useMemo } from "react";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";
import { useRequest } from "Contexts";
import { dummy_ListYoutube } from "Constants";
import {
  RequestBase,
  RequestContainer,
  RequestBottomContainer,
  Request_Navigation,
  Request_Background,
  Request_BottomButton,
} from "../shared/request";
import { RequestRequirementsEditor_Group } from "./newRequest_EditingDetails/index";

export const NewRequest_EditingDetails = ErrorPicker(() => {
  const { dataRequest, setDataRequest, isEdited, setIsEdited } = useRequest();
  const { listReference } = dataRequest || {};

  //개발 테스트용
  // useEffect(() => {
  //   const dummy1 = dummy_ListYoutube[0];
  //   const dummy2 = dummy_ListYoutube[1];
  //   const dummy3 = dummy_ListYoutube[2];

  //   !dataRequest &&
  //     setDataRequest((prev) => ({
  //       ...(prev || {}),
  //       listReference: {
  //         [dummy1.id.videoId]: {
  //           ...dummy1,
  //           dataEdit: {
  //             speed: "0",
  //             style: "0",
  //             timing: "0",
  //             mood: "0",
  //             clarity: "0",
  //             temperature: "0",
  //           },
  //         },
  //         [dummy2.id.videoId]: {
  //           ...dummy2,
  //           dataEdit: {
  //             speed: "0",
  //             style: "0",
  //             timing: "0",
  //             mood: "0",
  //             clarity: "0",
  //             temperature: "0",
  //           },
  //         },
  //         [dummy3.id.videoId]: {
  //           ...dummy3,
  //           dataEdit: {
  //             speed: "0",
  //             style: "0",
  //             timing: "0",
  //             mood: "0",
  //             clarity: "0",
  //             temperature: "0",
  //           },
  //         },
  //       },
  //     }));
  // }, []);

  const arrayReference = useMemo(() => {
    const getArray = listReference && Object.values(listReference);
    return getArray;
  }, [listReference]);

  useEffect(() => {
    const checkEveryEdited = arrayReference.every((data) => data.isEdited);

    !isEdited && checkEveryEdited && setIsEdited(true);
  }, [listReference]);

  const render = (
    <RequestBase>
      <RequestContainer>
        <Request_Navigation showBack={true} />
        <Container>
          <SubText>마지막 단계입니다!</SubText>
          <Text>결과물 희망 컨셉을 세부 조정할 수 있어요.</Text>
          {arrayReference?.map((ref, i) => (
            <RequestRequirementsEditor_Group
              key={ref.id.videoId}
              reference={ref}
              index={i}
              setDataRequest={setDataRequest}
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
      <Request_Background />
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
