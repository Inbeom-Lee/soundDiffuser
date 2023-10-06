import React from "react";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";

export const RequestReferences_Header = ErrorPicker(() => {
  const render = (
    <Container>
      <Title>SOUND DIFFUSER</Title>
      <Text>사운드 디자인 전문가 매칭 웹 서비스 </Text>
      <SubText>
        여러분의 소중한 창작물, 사운드 디퓨저가 함께 소리내어드립니다.
      </SubText>
    </Container>
  );
  return render;
}, ["RequestReferences_Header"]);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 34px 20px 45px;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.color.grey4};
`;
const Title = styled.h4`
  height: 40px;
  line-height: 40px;
  font-family: "Jost";
  font-size: 28px;
  letter-spacing: 1.4px;
  color: ${(props) => props.theme.color.text.white};
`;
const Text = styled.p`
  font-weight: 900;
  font-size: 13px;
  color: ${(props) => props.theme.color.text.white};
`;
const SubText = styled.p`
  margin-top: 13px;
  font-family: "AppleSD";
  font-size: 10px;
  font-weight: 600;
`;
