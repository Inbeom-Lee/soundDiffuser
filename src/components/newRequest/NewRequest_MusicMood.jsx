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

export const NewRequest_MusicMood = ErrorPicker(() => {
  const { dataRequest, setDataRequest } = useRequest();
  const { musicMood } = dataRequest || {};
  const musicQueries_Mood = [
    "산업, 금융, 신뢰, 엄중",
    "동기부여, 미래, 희망, 장엄",
    "개그, 코믹, 친근",
    "호러, 긴장, 스릴러",
    "낭만적, 영감",
    "극적, 밝음",
  ];
  const isButtonActive = musicMood?.length;

  const handlePurpose = useCallback(
    (purpose) =>
      setDataRequest((prev) => {
        const getMood = prev?.musicMood;
        const checkIncluded = getMood?.find(
          (selectedPurpose) => selectedPurpose === purpose
        );
        const newPurpose = checkIncluded
          ? getMood?.filter((selectedPurpose) => selectedPurpose !== purpose)
          : [...(getMood || []), purpose];

        return {
          ...prev,
          musicMood: newPurpose,
        };
      }),
    []
  );

  const render = (
    <RequestBase>
      <RequestContainer>
        <Request_Navigation />
        <Container>
          <Text>원하는 결과물이 다음 중 어디에 가깝나요?</Text>
          {musicQueries_Mood.map((purpose) => (
            <RequestMusic_Group
              key={purpose}
              purpose={purpose}
              isActive={musicMood?.find(
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
          routeNext="/newRequest/editingDetails"
          textButton="다음"
        />
      </BottomContainer>
      <Request_Background />
    </RequestBase>
  );
  return render || null;
}, ["NewRequest_MusicMood"]);
