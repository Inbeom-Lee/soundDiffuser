import React, { useState } from "react";
import styled, { css } from "styled-components";
import ErrorPicker from "ErrorPicker";
import { updateFS } from "Firebase";
import { useHandleInput } from "Hooks";

export const RequestCompleted_Instruction = ErrorPicker(
  ({ uidRequest, instruction, setInstruction }) => {
    const [showInput, setShowInput] = useState(false);
    const [isEditing, setIsEditing] = useState(true);

    const handleShow = () => setShowInput(true);
    const handleEdit = () => setIsEditing(true);

    const handleSave = async () => {
      try {
        const newData = { instruction };
        await updateFS(newData, ["requests", uidRequest]);
        setIsEditing(false);
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
            <Button
              $isEditing={isEditing}
              onClick={isEditing ? handleSave : handleEdit}
            >
              {isEditing ? "저장" : "수정"}
            </Button>
          ) : (
            <ButtonShow onClick={handleShow}>작성</ButtonShow>
          )}
        </Wrapper>
        <Textarea
          $showInput={showInput}
          $isEditing={isEditing}
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
const ButtonShow = styled.button`
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
const Button = styled.button`
  width: 27px;
  height: 14px;
  font-family: "appleSD";
  font-weight: 600;
  font-size: 8px;
  border: 0.5px solid;
  border-radius: 1px;
  transition: 0.5s;

  ${(props) => {
    const { $isEditing, theme } = props;
    const { primary, text, border, grey4, grey3 } = theme.color;

    return $isEditing
      ? css`
          color: ${text.white};
          background: ${primary};
          border-color: ${border.white};
        `
      : css`
          color: ${text.white};
          background: ${grey4};
          border-color: ${border.white};

          &:hover {
            background: ${grey3};
          }
        `;
  }}

  &:hover {
    cursor: pointer;
  }
`;
const Textarea = styled.textarea`
  display: block;
  margin-top: 14px;
  width: 100%;
  font-size: 12px;

  background: ${(props) => props.theme.color.background.white};
  border-style: solid;
  border-radius: 5px;
  resize: none;
  transition: 0.5s;

  ${(props) => {
    const { $showInput } = props;
    return $showInput
      ? css`
          padding: 10px;
          height: 98px;
          border-width: 1px;
        `
      : css`
          padding: 0;
          height: 0;
          border-width: 0;
        `;
  }}
  ${(props) => {
    const { $isEditing, theme } = props;
    const { text, grey4 } = theme.color;

    return $isEditing
      ? css`
          color: ${text.black};
          border-color: #ff0000;
          pointer-events: auto;
        `
      : css`
          color: ${grey4};
          border-color: #52ff00;
          pointer-events: none;
        `;
  }}

  &:focus {
    outline: none;
  }
`;
