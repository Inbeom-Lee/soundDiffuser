import React, { useEffect, useRef, useCallback } from "react";
import ErrorPicker from "ErrorPicker";
import { RequestBase } from "../../shared/request";

export const RequestReferences_BaseScrolled = ErrorPicker(
  ({
    refScrollPosition,
    runSearching,
    nextPageToken,
    scrollPosition_References,
    isYoutubeURL,
    isSearch,
    setRunSearching,
    children,
  }) => {
    const refContainer = useRef();

    useEffect(() => {
      const getContainer = refContainer.current;

      if (getContainer && scrollPosition_References) {
        getContainer.scrollTop = parseInt(scrollPosition_References, 10);
      }
    }, []);

    //스크롤 완료시 추가 검색
    const handleScroll = useCallback(
      (e) => {
        const { scrollHeight, clientHeight, scrollTop } = e.target;
        const checkScrollEnd = scrollHeight - clientHeight - scrollTop < 10;

        //---------- DUMMY ----------
        // checkScrollEnd && setRunSearching(true);

        //---------- YOUTUBE ----------
        isSearch &&
          checkScrollEnd && // 스크롤이 다 되었는지 체크
          nextPageToken && // 다음 페이지 토큰이 있는지 체크
          !runSearching && // 이미 검색중인지 체크
          !isYoutubeURL && // url이 아닌지 체크
          setRunSearching(true);

        //스크롤 포지션 임시 기록
        refScrollPosition.current = scrollTop;
      },
      [isSearch, runSearching, nextPageToken]
    );

    const render = (
      <RequestBase ref={refContainer} onScroll={handleScroll}>
        {children}
      </RequestBase>
    );
    return render;
  },
  ["RequestReferences_BaseScrolled"]
);
