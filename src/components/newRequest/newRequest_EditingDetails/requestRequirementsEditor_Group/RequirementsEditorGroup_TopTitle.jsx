import React from "react";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";
import svgUp from "Assets/svg/toggleUp.svg";
import svgDown from "Assets/svg/toggleDown.svg";

export const RequirementsEditorGroup_TopTitle = ErrorPicker(
  ({ index, toggle, setToggle }) => {
    const handleToggle = () => setToggle((prev) => !prev);

    const render = (
      <Container $toggle={toggle} onClick={handleToggle}>
        <Title>{index + 1}번 레퍼런스 곡</Title>
        <img src={toggle ? svgUp : svgDown} alt="토글 아이콘" />
      </Container>
    );
    return render;
  },
  ["RequirementsEditorGroup_TopTitle"]
);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 16px ${(props) => (props.$toggle ? "10px" : "17px")};
  transition: 0.5s ${(props) => props.theme.motion.type1};

  &:hover {
    cursor: pointer;
  }
`;
const Title = styled.label`
  font-family: "appleSD";
  font-weight: 700;
  font-size: 11px;

  &:hover {
    cursor: pointer;
  }
`;
