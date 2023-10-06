import React from "react";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";
import svgUp from "Asset/svg/toggleUp.svg";
import svgDown from "Asset/svg/toggleDown.svg";

export const RequestReferencesListSelected_Toggle = ErrorPicker(
  ({ lengthList, toggle, setToggle }) => {
    const handleToggle = () => setToggle((prev) => !prev);

    const render = (
      <Container $toggle={toggle} onClick={handleToggle}>
        <Text>선택된 곡: {lengthList || 0}개</Text>
        <img src={toggle ? svgDown : svgUp} alt="토글 아이콘" />
      </Container>
    );
    return render || null;
  },
  ["RequestReferencesListSelected_Toggle"]
);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  height: 38px;
  background: ${(props) => props.theme.color.grey1};
  border-bottom: 1px solid
    ${(props) =>
      props.$toggle ? props.theme.color.grey4 : props.theme.color.grey1};
  transition: 0.5s;

  &:hover {
    cursor: pointer;
  }
`;
const Text = styled.p`
  font-family: "appleSD";
  font-size: 12px;
  font-weight: 700;
`;
