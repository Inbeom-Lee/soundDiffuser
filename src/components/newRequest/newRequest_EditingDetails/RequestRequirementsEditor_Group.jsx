import React, { useState } from "react";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";
import {
  RequirementsEditorGroup_TopTitle,
  RequirementsEditorGroup_MusicInfo,
  RequirementsEditorGroup_Deco,
  RequirementsEditorGroup_Editor,
} from "./requestRequirementsEditor_Group/index";

export const RequestRequirementsEditor_Group = ErrorPicker(
  ({ reference, index, setDataRequest, handleIsEdit }) => {
    const [toggle, setToggle] = useState(index === 0 ? true : false);
    const { id, snippet, dataEdit } = reference || {};
    const { thumbnails, title, channelTitle } = snippet || {};
    const urlThumbnail = thumbnails?.high?.url;

    const render = (
      <Container>
        <RequirementsEditorGroup_TopTitle
          index={index}
          toggle={toggle}
          setToggle={setToggle}
        />
        <ToggleContainer $toggle={toggle}>
          <RequirementsEditorGroup_MusicInfo
            title={title}
            channelTitle={channelTitle}
            urlThumbnail={urlThumbnail}
          />
          <RequirementsEditorGroup_Deco />
          <RequirementsEditorGroup_Editor
            videoId={id?.videoId}
            dataEdit={dataEdit}
            setDataRequest={setDataRequest}
            handleIsEdit={handleIsEdit}
          />
        </ToggleContainer>
      </Container>
    );
    return render;
  },
  ["RequestRequirementsEditor_Group"]
);

const Container = styled.div`
  margin-bottom: 26px;
  background: ${(props) => props.theme.color.grey2};
  border-radius: 10px;
`;
const ToggleContainer = styled.div`
  padding: ${(props) => (props.$toggle ? "0 16px 38px" : "0 16px")};
  height: ${(props) => (props.$toggle ? 622 : 0)}px;
  overflow: hidden;
  transition: 0.5s ${(props) => props.theme.motion.type1};
`;
