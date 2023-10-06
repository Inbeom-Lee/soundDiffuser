import React, { useCallback } from "react";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";
import { RequirementsEditorGroupEditor_InputRange } from "./requirementsEditorGroup_Editor/index";

export const RequirementsEditorGroup_Editor = ErrorPicker(
  ({ videoId, dataEdit, setDataRequest, handleIsEdit }) => {
    const { speed, style, timing, mood, clarity, temperature } = dataEdit || {};

    const handler = useCallback((e) => {
      const { name, value } = e.target;
      setDataRequest((prev) => ({
        ...prev,
        listReference: {
          ...prev.listReference,
          [videoId]: {
            ...prev.listReference[videoId],
            dataEdit: {
              ...(prev.listReference[videoId].dataEdit || {}),
              [name]: value,
            },
          },
        },
      }));
      handleIsEdit();
    }, []);

    const render = (
      <>
        <TextGuide>나의 결과물은 위 레퍼런스 음악보다 oo면 좋겠어요.</TextGuide>
        <RequirementsEditorGroupEditor_InputRange
          name="speed"
          value={speed}
          labelStart="느림"
          labelEnd="빠름"
          isFirst={true}
          handler={handler}
        />
        <RequirementsEditorGroupEditor_InputRange
          name="style"
          value={style}
          labelStart="간단"
          labelEnd="화려"
          handler={handler}
        />
        <RequirementsEditorGroupEditor_InputRange
          name="timing"
          value={timing}
          labelStart="엇박"
          labelEnd="정박"
          handler={handler}
        />
        <RequirementsEditorGroupEditor_InputRange
          name="mood"
          value={mood}
          labelStart="조용"
          labelEnd="시끌"
          handler={handler}
        />
        <RequirementsEditorGroupEditor_InputRange
          name="clarity"
          value={clarity}
          labelStart="추상"
          labelEnd="또렷"
          handler={handler}
        />
        <RequirementsEditorGroupEditor_InputRange
          name="temperature"
          value={temperature}
          labelStart="차갑"
          labelEnd="따뜻"
          handler={handler}
        />
      </>
    );
    return render;
  },
  ["RequirementsEditorGroup_Editor"]
);

const TextGuide = styled.p`
  margin-top: 17px;
  font-family: "AppleSD";
  font-weight: 700;
  font-size: 13px;
`;
