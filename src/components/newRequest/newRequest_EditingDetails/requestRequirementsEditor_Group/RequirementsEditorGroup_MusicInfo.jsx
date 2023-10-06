import React, { useState } from "react";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";

export const RequirementsEditorGroup_MusicInfo = ErrorPicker(
  ({ title, channelTitle, urlThumbnail }) => {
    const [loadImage, setLoadImage] = useState(false);

    const render = (
      <Container>
        {urlThumbnail && (
          <Image
            src={urlThumbnail}
            alt={title}
            $loadImage={loadImage}
            onLoad={() => setLoadImage(true)}
          />
        )}
        <InfoContainer>
          <TextChannel>{channelTitle}</TextChannel>
          <Title>{title}</Title>
        </InfoContainer>
      </Container>
    );
    return render;
  },
  ["RequirementsEditorGroup_MusicInfo"]
);

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 12px 16px;
  background: ${(props) => props.theme.color.grey1};
  border-radius: 10px;
`;
const InfoContainer = styled.div`
  flex: 100;
`;
const TextChannel = styled.p`
  font-family: "appleSD";
  font-weight: 700;
  font-size: 11px;
  color: ${(props) => props.theme.color.grey4};
`;
const Title = styled.label`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-top: 8px;
  font-family: "appleSD";
  font-weight: 700;
  font-size: 11px;
  line-height: 15px;
  white-space: pre-line;
  overflow: hidden;
`;
const Image = styled.img`
  flex-shrink: 0;
  width: 85px;
  height: 55px;
  border-radius: 8px;
  object-fit: cover;
  opacity: ${(props) => (props.$loadImage ? 1 : 0)};
  transition: 0.5s;
`;
