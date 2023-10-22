import React from "react";
import ErrorPicker from "ErrorPicker";
import styled from "styled-components";
import { useRequest } from "Contexts";
import { Div_Opacity } from "Components";
import { listYoutubeRecommendation } from "Constants";
import { RequestReferences_ItemResult } from "./common/index";
import { RequestReferencesRecommend_LinkToSearch } from "./requestReferences_Recommend/index";

export const RequestReferences_Recommend = ErrorPicker(() => {
  const { dataRequest, setDataRequest, setPageRef } = useRequest();
  const { listReference } = dataRequest || {};

  const render = (
    <Div_Opacity>
      <RequestReferencesRecommend_LinkToSearch setPageRef={setPageRef} />
      <Text>레퍼런스가 없다면 추천해요!</Text>
      {listYoutubeRecommendation?.map(
        (item, i) =>
          item && (
            <RequestReferences_ItemResult
              key={`result${i}${item.id.videoId}`}
              item={item}
              isSelected={Boolean(listReference?.[item.id.videoId])}
              setDataRequest={setDataRequest}
            />
          )
      )}
    </Div_Opacity>
  );
  return render;
}, ["RequestReferences_Recommend"]);

const Text = styled.p`
  margin: 20px 18px 18px;
  color: #fff;
  font-weight: 900;
  font-size: 15px;
`;
