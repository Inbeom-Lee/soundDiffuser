import React, { useState, useEffect, useRef, useMemo } from "react";
import axios from "axios";
import ErrorPicker from "ErrorPicker";
import { useRequest } from "Contexts";
import {
  RequestContainer,
  RequestBottomContainer,
  Request_Navigation,
  Request_Background,
} from "../shared/request";
import {
  RequestReferences_BaseScrolled,
  RequestReferences_Header,
  RequestReferences_Search,
  RequestReferences_Recommend,
  RequestReferences_ListSelected,
  RequestReferences_BottomButton,
  RequestReferences_PopUp,
} from "./newRequest_References/index";
import { dummy_ListYoutube } from "Constants";

export const NewRequest_References = ErrorPicker(() => {
  const [runSearching, setRunSearching] = useState(false);
  const [showPopUp, setShowPopUp] = useState({
    status: false,
    transition: false,
    message: "",
  });
  const {
    dataRequest,
    setDataRequest,
    pageRef,
    textSearch,
    setListSearch,
    nextPageToken,
    setNextPageToken,
    scrollPosition_References,
    setScrollPosition_References,
  } = useRequest();
  const refScrollPosition = useRef(0);
  const { listReference } = dataRequest || {};

  //검색어가 youtube url인지 검증
  const isYoutubeURL = useMemo(() => {
    const pattern = /(^\.youtu|youtu\.$)/;
    const testURL = pattern.test(textSearch);

    return testURL;
  }, [textSearch]);

  //runSearching이 true 일때 youtube api 검색 요청
  useEffect(() => {
    const fetchYouTubeData = async () => {
      try {
        //---------- DUMMY 불러오기 START ----------
        // await new Promise((resolve) => setTimeout(() => resolve(), 500));
        // setListSearch((prev) => [...(prev || []), ...dummy_ListYoutube]);
        //---------- DUMMY END ----------

        //---------- YOUTUBE 불러오기 START ----------
        const video_id = textSearch.split("v=")[1];
        const queryText = isYoutubeURL ? video_id : textSearch;
        const maxResults = isYoutubeURL ? 1 : 50;
        const pageToken = isYoutubeURL ? null : nextPageToken;

        const SEARCH_URL = `https://www.googleapis.com/youtube/v3/search`;
        const SEARCH_PARAMS = {
          part: "snippet",
          type: "video",
          maxResults, //검색수
          q: queryText, //검색어
          pageToken, //스크롤 완료시 추가 검색을 위한 토큰
          key: process.env.YOUTUBE_API_KEY, //apiKey
        };

        const response = await axios(SEARCH_URL, { params: SEARCH_PARAMS });

        if (response.data) {
          const { nextPageToken, items } = response?.data || {};

          if (items.length === 0) throw "잘못된 검색입니다.";

          setNextPageToken(nextPageToken);
          setListSearch((prev) => [...(prev || []), ...items]);
        }
        //---------- YOUTUBE END ----------
      } catch (err) {
        setShowPopUp({ status: true, message: err || "" });
      } finally {
        //서칭 완료
        setRunSearching(false);
      }
    };
    runSearching && fetchYouTubeData();
  }, [runSearching, isYoutubeURL]);

  const render = (
    <>
      <RequestReferences_BaseScrolled
        refScrollPosition={refScrollPosition}
        runSearching={runSearching}
        nextPageToken={nextPageToken}
        scrollPosition_References={scrollPosition_References}
        isYoutubeURL={isYoutubeURL}
        isSearch={pageRef === "search"}
        setRunSearching={setRunSearching}
      >
        <Request_Background />
        <RequestContainer>
          <Request_Navigation />
          <RequestReferences_Header />
          {pageRef === "search" && (
            <RequestReferences_Search
              runSearching={runSearching}
              setRunSearching={setRunSearching}
            />
          )}
          {pageRef === "recommend" && <RequestReferences_Recommend />}
        </RequestContainer>
        <RequestBottomContainer>
          <RequestReferences_ListSelected
            listReference={listReference}
            setDataRequest={setDataRequest}
          />
          <RequestReferences_BottomButton
            listReference={listReference}
            refScrollPosition={refScrollPosition}
            setScrollPosition_References={setScrollPosition_References}
          />
        </RequestBottomContainer>
        <RequestReferences_PopUp
          showPopUp={showPopUp}
          setShowPopUp={setShowPopUp}
        />
      </RequestReferences_BaseScrolled>
    </>
  );
  return render;
}, ["NewRequest_References"]);
