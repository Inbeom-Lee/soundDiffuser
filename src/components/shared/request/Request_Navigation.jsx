import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";
import svgLogo from "Asset/logos/logo_SoundDiffuser.svg";

export const Request_Navigation = ErrorPicker(() => {
  const naviage = useNavigate();

  const handleHome = () => naviage("/");

  const render = (
    <Container>
      <Logo src={svgLogo} onClick={handleHome} />
    </Container>
  );
  return render;
}, ["Request_Navigation"]);

const Container = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 0 20px;
  width: 100%;
  max-width: 768px;
  height: 56px;
  background: ${(props) => props.theme.color.grey1};
  border-bottom: 1px solid ${(props) => props.theme.color.grey4};
  z-index: 1;
`;
const Logo = styled.img`
  display: block;
  width: 83px;

  &:hover {
    cursor: pointer;
  }
`;
