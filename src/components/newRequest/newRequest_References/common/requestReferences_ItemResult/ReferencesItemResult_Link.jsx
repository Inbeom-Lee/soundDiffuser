import React from "react";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";
import svgYoutube from "Assets/svg/logoYoutube.svg";

export const ReferencesItemResult_Link = ErrorPicker(
  ({ videoId }) => {
    const handleYoutube = (e) => {
      if (videoId) {
        e.stopPropagation();
        const url = `https://youtube.com/watch?v=${videoId}`;
        window.open(url, "_blank");
      }
    };

    const render = (
      <Container onClick={handleYoutube}>
        <img src={svgYoutube} alt="유튜브 링크" />
      </Container>
    );
    return render || null;
  },
  ["ReferencesItemResult_Link"]
);

const Container = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  background: ${(props) => props.theme.color.grey5};
  border: 1px solid ${(props) => props.theme.color.border.white};
  border-radius: 50%;
  transition: 0.3s;

  &:hover {
    background: ${(props) => props.theme.color.grey4};
  }
`;
