import React, { useState } from "react";
import styled, { css } from "styled-components";
import ErrorPicker from "ErrorPicker";
import { updateFS } from "Firebase";
import { useHandleInput } from "Hooks";
import { Div_Opacity } from "Components";

export const RequestCompleted_Instruction = ErrorPicker(
  ({ uidRequest, instruction, setInstruction }) => {
    const [showInput, setShowInput] = useState(false);

    const handleShow = () => setShowInput(true);

    const handleSave = async () => {
      try {
        setShowInput(false);
        const newData = { instruction };
        await updateFS(newData, ["requests", uidRequest]);
      } catch (err) {
        console.log(err);
      }
    };

    const handleData = () => setInstruction(tempData);

    const [tempData, setTempData] = useHandleInput(instruction, handleData);

    const render = (
      <Container>
        <Wrapper $showInput={showInput}>
          <Label>추가 요구사항</Label>
          {showInput ? (
            <ButtonSave onClick={handleSave}>저장</ButtonSave>
          ) : (
            <ButtonEdit onClick={handleShow}>수정</ButtonEdit>
          )}
        </Wrapper>
        {!showInput && <Text>{instruction}</Text>}
        <Textarea
          $showInput={showInput}
          value={tempData}
          onChange={setTempData}
        />
      </Container>
    );
    return render;
  },
  ["RequestCompleted_Instruction"]
);

const Container = styled.div`
  margin-top: 19px;
  padding: 0 5px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: ${(props) => (props.$showInput ? "space-between" : "start")};
  align-items: ${(props) => (props.$showInput ? "center" : "end")};
`;
const Label = styled.label`
  font-family: "appleSD";
  font-size: 12px;
  font-weight: 600;
`;
const ButtonEdit = styled.button`
  margin-left: 10px;
  width: fit-content;
  height: fit-content;
  font-family: "appleSD";
  font-weight: 600;
  font-size: 8px;
  color: ${(props) => props.theme.color.text.white};
  text-decoration: underline;
  background: none;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;
const ButtonSave = styled.button`
  width: 27px;
  height: 14px;
  font-family: "appleSD";
  font-weight: 600;
  font-size: 8px;

  border: 0.5px solid;
  border-radius: 1px;
  transition: 0.5s;

  ${(props) => {
    const { primary, text, border } = props.theme.color;

    return css`
      color: ${text.white};
      background: ${primary};
      border-color: ${border.white};
    `;
  }}

  &:hover {
    cursor: pointer;
  }
`;
const Text = styled(Div_Opacity)`
  margin-top: 7px;
  font-family: "appleSD";
  font-weight: 400;
  font-size: 12px;
  color: ${(props) => props.theme.color.grey4};
  line-height: 13px;
  white-space: pre-line;
`;
const Textarea = styled.textarea`
  display: block;
  margin-top: 14px;
  width: 100%;
  font-size: 12px;
  color: ${(props) => props.theme.color.text.black};
  background: ${(props) => props.theme.color.background.white};
  border-style: solid;
  border-color: ${(props) => props.theme.color.grey4};
  border-radius: 5px;
  resize: none;
  transition: 0.2s;

  ${(props) => {
    const { $showInput } = props;
    return $showInput
      ? css`
          padding: 10px;
          height: 98px;
          border-width: 1px;
        `
      : css`
          padding: 0 10px;
          height: 0;
          border-width: 0;
        `;
  }}

  &:focus {
    outline: none;
  }
`;
