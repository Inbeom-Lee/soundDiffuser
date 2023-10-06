import React, { useMemo } from "react";
import ErrorPicker from "ErrorPicker";
import { Request_BottomButton } from "../../shared/request";

export const RequestReferences_BottomButton = ErrorPicker(
  ({ listReference, refScrollPosition, setScrollPosition_References }) => {
    //하단 버튼 활성화 체크 - 선택된 영상의 수가 1개 이상
    const isButtonActive = useMemo(
      () => listReference && Object.keys(listReference)?.length,
      [listReference]
    );

    //스크롤 포지션 저장
    const handler = () => {
      const getPosition = refScrollPosition.current;
      setScrollPosition_References(getPosition);
    };

    const render = (
      <Request_BottomButton
        isActive={isButtonActive}
        routeNext="/newRequest/musicPurpose"
        textButton="즉시 의뢰하기"
        handler={handler}
      />
    );
    return render;
  },
  ["RequestReferences_BottomButton"]
);
