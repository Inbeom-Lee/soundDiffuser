import React, { useState } from "react";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";
import { Div_Opacity } from "Components";

export const RequestReferences_ItemResult = ErrorPicker(
  ({ item, isSelected, setDataRequest }) => {
    const [loadImage, setLoadImage] = useState(false);
    const [channelURL, setChannelURL] = useState();
    const { id, snippet } = item || {};
    const { thumbnails, title, channelId, channelTitle, description } =
      snippet || {};
    const urlThumbnail = thumbnails?.high?.url;

    //-----유튜브 채널 정보 불러오기-----api 사용량이 너무 많아짐
    // useEffect(() => {
    //   const searchChannelData = async () => {
    //     try {
    //       const SEARCH_URL = `https://www.googleapis.com/youtube/v3/channels`;
    //       const SEARCH_PARAMS = {
    //         part: "snippet",
    //         id: channelId,
    //         key: process.env.YOUTUBE_API_KEY,
    //       };

    //       const response = await axios(SEARCH_URL, { params: SEARCH_PARAMS });

    //       console.log(response);

    //       const getUrl =
    //         response?.data?.items?.[0].snippet?.thumbnails?.default?.url;
    //       getUrl && setChannelURL(getUrl);
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   };
    //   channelId && searchChannelData();
    // }, []);

    //리스트 선택 처리
    const handleSelect = () => {
      setDataRequest((prev) => ({
        ...prev,
        listReference: {
          ...(prev?.listReference || {}),
          [id.videoId]: {
            ...item,
            dataEdit: {
              speed: "3",
              style: "3",
              timing: "3",
              mood: "3",
              clarity: "3",
              temperature: "3",
            },
          },
        },
      }));
    };

    const render = (
      <Container $selected={isSelected} onClick={handleSelect}>
        <ImageContainer>
          {urlThumbnail && (
            <Image
              src={urlThumbnail}
              alt={title}
              $loadImage={loadImage}
              onLoad={() => setLoadImage(true)}
            />
          )}
        </ImageContainer>
        <Div_Opacity>
          <Title>{title}</Title>
          <Wrapper>
            {channelURL ? (
              <ThumbnailChannel src={channelURL} alt="채널이미지" />
            ) : (
              <EmptyThumbnailChannel />
            )}
            <TextChannel>{channelTitle}</TextChannel>
          </Wrapper>
          <TextDesc>{description}</TextDesc>
        </Div_Opacity>
      </Container>
    );
    return render || null;
  },
  ["RequestReferences_ItemResult"]
);

const Container = styled.div`
  display: flex;
  gap: 9px;
  padding: 12px 18px;
  width: 100%;
  background: ${(props) =>
    props.$selected ? props.theme.color.grey4 : props.theme.color.grey3};
  transition: 0.5s;

  &:hover {
    cursor: pointer;
  }
`;
const ImageContainer = styled.div`
  flex-shrink: 0;
  width: 144px;
  height: 94px;
`;
const Image = styled.img`
  width: 144px;
  height: 94px;
  border-radius: 3px;
  object-fit: cover;
  opacity: ${(props) => (props.$loadImage ? 1 : 0)};
  transition: 0.5s;
`;
const Title = styled.h4`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  min-height: 32px;
  font-family: "appleSD";
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  white-space: pre-line;
  overflow: hidden;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 7px;
`;
const ThumbnailChannel = styled.img`
  margin-right: 5px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
`;
const EmptyThumbnailChannel = styled.div`
  margin-right: 5px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #d9d9d9;
`;
const TextChannel = styled.p`
  font-family: "appleSD";
  font-weight: 500;
  font-size: 10px;
`;
const TextDesc = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: pre-line;
  margin-top: 6px;
  font-size: 9px;
  overflow: hidden;
`;
