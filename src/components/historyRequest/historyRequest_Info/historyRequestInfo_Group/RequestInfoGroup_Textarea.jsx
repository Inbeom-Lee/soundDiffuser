import React from "react";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";
import { useHandleInput } from "Hooks";

export const RequestInfoGroup_Textarea = ErrorPicker(
  ({ instruction, setInstruction }) => {
    const handleData = () => setInstruction(tempData);

    const [tempData, setTempData] = useHandleInput(instruction, handleData);

    const render = <Textarea value={tempData} onChange={setTempData} />;
    return render;
  },
  ["RequestInfoGroup_Textarea"]
);

const Textarea = styled.textarea`
  display: block;
  margin-top: 25px;
  padding: 10px;
  width: 100%;
  height: 216px;
  font-size: 12px;
  color: ${(props) => props.theme.color.text.black};
  background: #fff;
  border: none;
  border-radius: 5px;
  resize: none;

  &:focus {
    outline: none;
  }
`;
