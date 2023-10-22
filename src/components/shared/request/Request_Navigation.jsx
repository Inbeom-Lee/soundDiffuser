import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";
import svgLogo from "Assets/logos/logo_SoundDiffuser.svg";
import svgBack from "Assets/svg/navBack.svg";

export const Request_Navigation = ErrorPicker(
  ({ showBack }) => {
    const naviage = useNavigate();

    const handleHome = () => naviage("/");

    const handleBack = () => naviage(-1);

    const render = (
      <Container $showBack={showBack}>
        {showBack ? (
          <>
            <IconContainer onClick={handleBack}>
              <img src={svgBack} alt="뒤로가기" />
            </IconContainer>
            <LogoContainer onClick={handleHome}>
              <img src={svgLogo} alt="홈" />
            </LogoContainer>
            <IconContainer />
          </>
        ) : (
          <LogoContainer onClick={handleHome}>
            <img src={svgLogo} alt="홈" />
          </LogoContainer>
        )}
      </Container>
    );
    return render;
  },
  ["Request_Navigation"]
);

const Container = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: ${(props) => (props.$showBack ? "space-between" : "center")};
  align-items: center;
  position: sticky;
  top: 0;
  padding: 0 24px;
  width: 100%;
  max-width: 768px;
  height: 56px;
  background: ${(props) => props.theme.color.grey1};
  border-bottom: 1px solid ${(props) => props.theme.color.grey4};
  z-index: 1;
`;
const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;
const IconContainer = styled(ItemContainer)`
  width: 24px;
  height: 24px;
`;
const LogoContainer = styled(ItemContainer)`
  width: 100px;
  height: 40px;
`;
