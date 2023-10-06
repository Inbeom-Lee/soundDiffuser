import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

export const PageAnimation_Fade = ({ duration = 0.5, children, ...props }) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setFadeIn(true));
    return () => setFadeIn(false);
  }, []);

  return (
    <Container $fadeIn={fadeIn} $duration={duration} {...props}>
      {children}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  transition: opacity ${(props) => props.$duration}s;

  ::-webkit-scrollbar {
    display: none;
    /* width: 20px; */
    background-color: red;
    /* width: 1px; */
  }
  /* -ms-overflow-style: none; */
  /* scrollbar-width: none; */

  ${(props) =>
    props.$fadeIn
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `}
`;
