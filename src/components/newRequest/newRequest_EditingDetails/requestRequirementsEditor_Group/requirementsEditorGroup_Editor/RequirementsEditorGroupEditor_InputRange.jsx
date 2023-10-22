import React from "react";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";

export const RequirementsEditorGroupEditor_InputRange = ErrorPicker(
  ({ name, value, labelStart, labelEnd, isFirst, handler }) => {
    const range = ["-3", "-2", "-1", "0", "+1", "+2", "+3"];

    const render = (
      <Container style={{ marginTop: isFirst ? "17px" : "40px" }}>
        <TextRange>{labelStart}</TextRange>
        <InputTrack />
        <InputRange
          type="range"
          name={name}
          min="-3"
          max="3"
          step="1"
          value={value}
          onChange={handler}
        />
        <DotCenter />
        <TextRange>{labelEnd}</TextRange>
        <ContainerNumber>
          {range.map((num) => (
            <TextNumber key={`${name}${num}`}>{num}</TextNumber>
          ))}
        </ContainerNumber>
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
  z-index: 1;

  &:focus {
    outline: none;
  }
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    cursor: pointer;
    -webkit-appearance: none;
    width: 25px;
    height: 31px;
    background: ${(props) => props.theme.color.secondary[400]};
    border-radius: 4px;
    box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.25) inset,
      0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  &::-moz-range-thumb {
    cursor: pointer;
    width: 25px;
    height: 31px;
    background: ${(props) => props.theme.color.secondary[400]};
    border-radius: 4px;
    box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.25) inset,
      0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;
const DotCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 3px;
  height: 3px;
  background: ${(props) => props.theme.color.background.white};
  border-radius: 50%;
`;
const ContainerNumber = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: -16px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 105px);
`;
const TextNumber = styled.p`
  width: 6px;
  font-family: "appleSD";
  font-weight: 500;
  font-size: 6px;
  text-align: center;
  color: ${(props) => props.theme.color.text.white};
`;
