import React, { useCallback } from "react";
import ErrorPicker from "ErrorPicker";
import { useRequest } from "Contexts";
import {
  RequestBase,
  RequestContainer,
  Request_Navigation,
  Request_BottomButton,
  Request_Background,
} from "../shared/request";
import {
  Music_Container as Container,
  Music_Text as Text,
  Music_BottomContainer as BottomContainer,
  RequestMusic_Group,
} from "./common_Music/index";

export const NewRequest_MusicPurpose = ErrorPicker(() => {
  const { dataRequest, setDataRequest } = useRequest();
  const { musicPurpose } = dataRequest || {};
  const musicQueries_Purpose = [
    "영상 / 콘텐츠 배경음악",
    "브랜드 홍보 CM송, 징글",
    "안내성 음악 / 효과음",
    "기존 곡 믹싱 / 패러디",
    "신규 음원 창작 / 발매",
    "보기에 없어요 / 기타",
  ];
  const isButtonActive = musicPurpose?.length;

  const handlePurpose = useCallback(
    (purpose) =>
      setDataRequest((prev) => {
        const getPurpose = prev?.musicPurpose;
        const checkIncluded = getPurpose?.find(
          (selectedPurpose) => selectedPurpose === purpose
        );
        const newPurpose = checkIncluded
          ? getPurpose?.filter((selectedPurpose) => selectedPurpose !== purpose)
          : [...(getPurpose || []), purpose];

        return {
          ...prev,
          musicPurpose: newPurpose,
        };
      }),
    []
  );

  const render = (
    <RequestBase>
      <RequestContainer>
        <Request_Navigation />
        <Container>
          <Text>이번 곡의 의뢰 목적이 무엇인가요? </Text>
          {musicQueries_Purpose.map((purpose) => (
            <RequestMusic_Group
              key={purpose}
              purpose={purpose}
              isActive={musicPurpose?.find(
                (selectedPurpose) => selectedPurpose === purpose
              )}
              handleMusic={() => handlePurpose(purpose)}
            />
          ))}
        </Container>
      </RequestContainer>
      <BottomContainer>
        <Request_BottomButton
          isActive={isButtonActive}
          routeNext="/newRequest/musicMood"
          textButton="다음"
        />
      </BottomContainer>
      <Request_Background />
    </RequestBase>
  );
  return render || null;
}, ["NewRequest_MusicPurpose"]);
