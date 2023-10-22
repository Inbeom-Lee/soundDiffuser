import React from "react";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";
import { Div_Opacity } from "Components";

export const ReferencesItemResult_Info = ErrorPicker(
  ({ title, channelTitle, description }) => {
    const render = (
      <Div_Opacity>
        <Title>{title}</Title>
        <Wrapper>
          <EmptyThumbnailChannel />
          <TextChannel>{channelTitle}</TextChannel>
        </Wrapper>
        <TextDesc>{description}</TextDesc>
      </Div_Opacity>
    );
    return render;
  },
  ["ReferencesItemResult_Info"]
);

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
