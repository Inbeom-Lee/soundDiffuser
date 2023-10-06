import React from "react";
import styled from "styled-components";

const SVG = styled.svg`
  &:hover {
    cursor: pointer;
  }
`;

export const Back = (props) => {
  return (
    <SVG width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M3 12H23"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      />
      <path
        d="M10.7071 4.70711C11.0976 4.31658 11.0976 3.68342 10.7071 3.29289C10.3166 2.90237 9.68342 2.90237 9.29289 3.29289L10.7071 4.70711ZM2 12L1.29289 11.2929C0.902369 11.6834 0.902369 12.3166 1.29289 12.7071L2 12ZM9.29289 20.7071C9.68342 21.0976 10.3166 21.0976 10.7071 20.7071C11.0976 20.3166 11.0976 19.6834 10.7071 19.2929L9.29289 20.7071ZM9.29289 3.29289L1.29289 11.2929L2.70711 12.7071L10.7071 4.70711L9.29289 3.29289ZM1.29289 12.7071L9.29289 20.7071L10.7071 19.2929L2.70711 11.2929L1.29289 12.7071Z"
        fill="black"
        {...props}
      />
    </SVG>
  );
};

