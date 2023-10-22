import React from "react";
import ErrorPicker from "ErrorPicker";
import { useRequest } from "Contexts";
import { Div_Opacity } from "Components";
import { RequestReferences_ItemResult } from "./common/index";
import {
  RequestReferencesSearch_Input,
  RequestReferencesSearch_LinkToRecommend,
  RequestReferencesSearch_ItemsLoading,
} from "./requestReferences_Search/index";

export const RequestReferences_Search = ErrorPicker(
  ({ runSearching, setRunSearching }) => {
    const {
      dataRequest,
      setDataRequest,
      setPageRef,
      textSearch,
      setTextSearch,
      listSearch,
      setListSearch,
    } = useRequest();
    const { listReference } = dataRequest || {};

    const render = (
      <Div_Opacity>
        <RequestReferencesSearch_Input
          textSearch={textSearch}
          setTextSearch={setTextSearch}
          setListSearch={setListSearch}
          setRunSearching={setRunSearching}
        />
        <RequestReferencesSearch_LinkToRecommend setPageRef={setPageRef} />
        {listSearch?.map(
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
        {runSearching && <RequestReferencesSearch_ItemsLoading />}
      </Div_Opacity>
    );
    return render;
  },
  ["RequestReferences_Search"]
);
