import React from "react";
import styled, { keyframes } from "styled-components";

const circumf = `${3.1416 * 55 * 10}px`;
const checkLen = "75px";

const keyframes_Outline = keyframes`
  from {
    stroke-dasharray: 0, ${circumf};
  }
  to {
    stroke-dasharray: ${circumf}, ${circumf};
  }
`;
const Outline = styled.circle`
  animation: 0.38s ease-in ${keyframes_Outline};
  transform: rotate(0deg);
  transform-origin: center;
`;
const keyframes_Circle = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0);
  }
`;
const WhiteCircle = styled.circle`
  animation: 0.35s ease-in 0.35s forwards ${keyframes_Circle};
  transform: none;
  transform-origin: center;
`;

const keyframes_check = keyframes`
  from {
  stroke-dasharray: 0, ${checkLen};
  }
  to {
  stroke-dasharray: ${checkLen}, ${checkLen};
  }
`;

const Check = styled.polyline`
  animation: 0.34s cubic-bezier(0.65, 0, 1, 1) 0.8s forwards ${keyframes_check};
  stroke-dasharray: 0, ${checkLen};
`;

const keyframes_CheckGroup = keyframes`
  from {
    transform: scale(1);
  }
  50% {
    transform: scale(1.09);
    stroke-linecap: round;
  }
  to {
    transform: scale(1);
    stroke-linecap: round;
  }
`;

const CheckGroup = styled.g`
  animation: 0.32s ease-in-out 1.03s ${keyframes_CheckGroup} forwards;
  transform-origin: center;
`;

export const CheckWithCircle = () => {
  return (
    <svg
      width="60px"
      height="60px"
      viewBox="0 0 133 133"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <CheckGroup
        id="check-group"
        stroke="none"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      >
        <circle
          id="filled-circle"
          fill="#4d94ff"
          cx="66.5"
          cy="66.5"
          r="54.5"
        ></circle>
        <WhiteCircle
          id="white-circle"
          fill="#FFFFFF"
          cx="66.5"
          cy="66.5"
          r="55.5"
        ></WhiteCircle>
        <Outline
          id="outline"
          stroke="#4d94ff"
          strokeWidth="4"
          cx="66.5"
          cy="66.5"
          r="54.5"
        ></Outline>
        <Check
          id="check"
          stroke="#FFFFFF"
          strokeWidth="6"
          points="41 70 56 85 92 49"
        ></Check>
      </CheckGroup>
    </svg>
  );
};
