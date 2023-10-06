import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

export const PageAnimation_FadeRise = ({
  duration = 0.5,
  movement = 20,
  children,
  ...props
}) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setFadeIn(true));
    return () => setFadeIn(false);
  }, []);

  return (
    <Container
      $fadeIn={fadeIn}
      $duration={duration}
      $movement={movement}
      {...props}
    >
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: flow-root;
  width: 100%;
  height: 100%;
  transition: ${(props) => props.$duration}s;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  ${(props) =>
    props.$fadeIn
      ? css`
          visibility: visible;
          opacity: 1;
          transform: translateY(0);
        `
      : css`
          visibility: hidden;
          opacity: 0;
          transform: translateY(${(props) => props.$movement}px);
        `}
`;
