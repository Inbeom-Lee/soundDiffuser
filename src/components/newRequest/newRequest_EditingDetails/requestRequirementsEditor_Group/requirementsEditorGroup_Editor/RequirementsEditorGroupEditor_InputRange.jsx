import React from "react";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";

export const RequirementsEditorGroupEditor_InputRange = ErrorPicker(
  ({ name, value, labelStart, labelEnd, isFirst, handler }) => {
    const render = (
      <Container style={{ marginTop: isFirst ? "20px" : "" }}>
        <TextRange>{labelStart}</TextRange>
        <InputTrack />
        <InputRange
          type="range"
          name={name}
          min="1"
          max="5"
          step="1"
          value={value}
          onChange={handler}
        />
        <TextRange>{labelEnd}</TextRange>
      </Container>
    );
    return render;
  },
  ["RequirementsEditorGroupEditor_InputRange"]
);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  gap: 9px;
  margin-top: 34px;
  height: 32px;
`;
const TextRange = styled.p`
  flex-shrink: 0;
  width: 21px;
  font-size: 11px;
`;
const InputTrack = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 60px);
  height: 20px;
  border-radius: 10px;
  background: ${(props) => props.theme.color.grey1};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
const InputRange = styled.input`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 84px);
  height: 39px;
  appearance: none;
  background: transparent;

  &:focus {
    outline: none;
  }
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    cursor: pointer;
    -webkit-appearance: none;
    width: 38px;
    height: 32px;
    background: ${(props) => props.theme.color.secondary[400]};
    border-radius: 2px;
  }

  &::-moz-range-thumb {
    cursor: pointer;
    width: 38px;
    height: 32px;
    background: ${(props) => props.theme.color.secondary[400]};
    border-radius: 2px;
  }
`;
