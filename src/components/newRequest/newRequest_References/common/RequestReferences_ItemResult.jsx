import React, { useCallback } from "react";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";
import { writeFS } from "Firebase";
import {
  ReferencesItemResult_Image,
  ReferencesItemResult_Info,
  ReferencesItemResult_Link,
} from "./requestReferences_ItemResult/index";

export const RequestReferences_ItemResult = ErrorPicker(
  ({ item, isSelected, setDataRequest }) => {
    const { id, snippet } = item || {};
    const { thumbnails, title, channelTitle, description } = snippet || {};
    const { videoId } = id || {};
    const urlThumbnail = thumbnails?.high?.url;

    //리스트 선택 처리
    const handleSelect = useCallback(() => {
      writeFS(item, ["listRecommend", videoId]);
      setDataRequest((prev) => {
        const { [videoId]: _, ...rest } = prev?.listReference || {};

        return {
          ...prev,
          listReference: isSelected
            ? rest
            : {
                ...rest,
                [videoId]: {
                  ...item,
                  dataEdit: {
                    speed: "0",
                    style: "0",
                    timing: "0",
                    mood: "0",
                    clarity: "0",
                    temperature: "0",
                  },
                },
              },
        };
      });
    }, [isSelected]);

    const render = (
      <Container $selected={isSelected} onClick={handleSelect}>
        <Wrapper>
          <ReferencesItemResult_Image
            urlThumbnail={urlThumbnail}
            title={title}
          />
          <ReferencesItemResult_Info
            title={title}
            channelTitle={channelTitle}
            description={description}
          />
        </Wrapper>
        <ReferencesItemResult_Link videoId={videoId} />
      </Container>
    );
    return render;
  },
  ["RequestReferences_ItemResult"]
);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 9px;
  padding: 12px 18px;
  width: 100%;
  background: ${(props) =>
    props.$selected
      ? props.theme.color.secondary[400]
      : props.theme.color.grey3};
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    background: ${(props) =>
      props.$selected
        ? props.theme.color.secondary[400]
        : props.theme.color.grey2};
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  width: 100%;
`;
