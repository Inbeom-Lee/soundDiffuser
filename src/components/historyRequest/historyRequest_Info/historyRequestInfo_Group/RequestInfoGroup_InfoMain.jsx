import React from "react";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";

export const RequestInfoGroup_InfoMain = ErrorPicker(
  ({ arrayReference, musicPurpose, musicMood, instruction }) => {
    const getPurpose = musicPurpose?.join(", ");
    const getMood = musicMood?.join(", ");

    const render = (
      <Container>
        <Label>의뢰 목적</Label>
        <Text>{getPurpose}</Text>
        {arrayReference?.map((ref, i) => {
          const { id, snippet, dataEdit } = ref;
          const { title } = snippet;
          const { speed, style, timing, mood, clarity, temperature } =
            dataEdit || {};
          const checkEdit = (data) => {
            const getCalc = Number(data);
            return getCalc < 0 ? getCalc : `+${getCalc}`;
          };

          return (
            <div key={id.videoId}>
              <Label>참고 레퍼런스 음악{i + 1}</Label>
              <Text>
                <span dangerouslySetInnerHTML={{ __html: title }} />
                <br />
                속도 {checkEdit(speed)}&nbsp;/&nbsp; 스타일 {checkEdit(style)}
                &nbsp;/&nbsp; 박자 {checkEdit(timing)}&nbsp;/&nbsp; 무드
                {checkEdit(mood)}&nbsp;/&nbsp; 명확도 {checkEdit(clarity)}
                &nbsp;/&nbsp; 온도 {checkEdit(temperature)}
              </Text>
            </div>
          );
        })}
        <Label>제작 컨셉</Label>
        <Text>{getMood}</Text>
        <Label>추가 요구사항</Label>
        <Text>{instruction}</Text>
      </Container>
    );
    return render || null;
  },
  ["RequestInfoGroup_InfoMain"]
);

const Container = styled.div`
  padding: 0 5px;
`;
const Label = styled.p`
  margin-top: 19px;
  font-family: "appleSD";
  font-weight: 600;
  font-size: 12px;
`;
const Text = styled.p`
  margin-top: 7px;
  font-family: "appleSD";
  font-weight: 400;
  font-size: 12px;
  color: ${(props) => props.theme.color.grey4};
  line-height: 14px;
  white-space: pre-line;
`;
