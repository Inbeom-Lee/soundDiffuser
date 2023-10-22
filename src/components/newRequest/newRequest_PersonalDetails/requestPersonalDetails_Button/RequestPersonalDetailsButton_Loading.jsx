import React from "react";
import styled, { css } from "styled-components";
import ErrorPicker from "ErrorPicker";
import svgLoading from "Assets/svg/loading.svg";

export const RequestPersonalDetailsButton_Loading = ErrorPicker(
  ({ isLoading }) => {
    const render = (
      <Container $show={isLoading} onClick={(e) => e.stopPropagation()}>
        <img src={svgLoading} alt="로딩" />
      </Container>
    );
    return render;
  },
  ["RequestPersonalDetailsButton_Loading"]
);

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 318px;
  height: 135px;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100000;
  transition: 0.5s;

  ${(props) =>
    props.$show
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `}
`;
