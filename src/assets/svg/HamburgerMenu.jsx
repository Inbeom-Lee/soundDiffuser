import React from "react";
import styled from "styled-components";

const SVG = styled.svg`
  &:hover {
    cursor: pointer;
  }
`;

export const HamburgerMenu = (props) => {
  return (
    <SVG width="20" height="16" viewBox="0 0 20 16" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1C0 0.447715 0.447715 0 1 0H19C19.5523 0 20 0.447715 20 1C20 1.55228 19.5523 2 19 2H1C0.447715 2 0 1.55228 0 1ZM0 8C0 7.44772 0.447715 7 1 7H19C19.5523 7 20 7.44772 20 8C20 8.55229 19.5523 9 19 9H1C0.447715 9 0 8.55229 0 8ZM1 14C0.447715 14 0 14.4477 0 15C0 15.5523 0.447715 16 1 16H19C19.5523 16 20 15.5523 20 15C20 14.4477 19.5523 14 19 14H1Z"
        fill="#101010"
        {...props}
      />
    </SVG>
  );
};
