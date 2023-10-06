import React from "react";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";

export const RequestInfoGroup_InfoMain = ErrorPicker(
  ({ arrayReference, musicPurpose, musicMood }) => {
    const getPurpose = musicPurpose?.join(", ");
    const getMood = musicMood?.join(", ");

    const render = (
      <Container>
        <Label>의뢰 목적</Label>
        <Text>{getPurpose}</Text>
        <Label>참고 레퍼런스 음악</Label>
        {arrayReference?.map((ref) => {
          const { id, snippet, dataEdit } = ref;
          const { channelTitle, title } = snippet;
          const { speed, style, timing, mood, clarity, temperature } =
            dataEdit || {};
          const checkEdit = (data) => {
            const getCalc = Number(data) - 3;
            return getCalc < 0 ? getCalc : `+${getCalc}`;
          };

          return (
            <Text key={id.videoId}>
              {channelTitle}
              {title}
              <br />
              속도 {checkEdit(speed)}&nbsp;/&nbsp; 스타일 {checkEdit(style)}
              &nbsp;/&nbsp; 박자 {checkEdit(timing)}&nbsp;/&nbsp; 무드
              {checkEdit(mood)}&nbsp;/&nbsp; 명확도 {checkEdit(clarity)}
              &nbsp;/&nbsp; 온도 {checkEdit(temperature)}
            </Text>
          );
        })}
        <Label>제작 컨셉</Label>
        <Text>{getMood}</Text>
      </Container>
    );
    return render || null;
  },
  ["RequestInfoGroup_InfoMain"]
);

const Container = styled.div`
  padding: 0 5px 22px;
  border-bottom: 1px solid ${(props) => props.theme.color.grey4};
`;
const Label = styled.p`
  margin-top: 17px;
  font-family: "appleSD";
  font-size: 10px;
  font-weight: 600;
`;
const Text = styled.p`
  margin-top: 7px;
  font-family: "appleSD";
  font-weight: 400;
  font-size: 10px;
  color: ${(props) => props.theme.color.grey4};
  line-height: 13px;
`;
