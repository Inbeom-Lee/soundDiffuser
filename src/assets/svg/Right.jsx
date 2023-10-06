import React from "react";

export const Right = (props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M9 6L15 12L9 18"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="bevel"
        {...props}
        onClick={() => null}
      />
    </svg>
  );
};
