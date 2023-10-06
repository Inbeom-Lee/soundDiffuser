import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";
import { PageAnimation_FadeRise, Button_Primary } from "Components";

const Error = ErrorPicker(() => {
  const naviage = useNavigate();

  const handleNext = () => naviage("/");

  const render = (
    <PageAnimation_FadeRise>
      <Container>
        <Title>오류가 발생했습니다.</Title>
        <Text>오류에 대한 설명</Text>
        <Button onClick={handleNext}>초기 화면으로 돌아가기</Button>
      </Container>
    </PageAnimation_FadeRise>
  );
  return render || null;
}, ["Request_References"]);

const Container = styled.div`
  display: flow-root;
  margin: 0 auto;
  width: 100%;
  max-width: 768px;
`;
const Title = styled.h4`
  margin-top: 140px;
  font-size: 18px;
  text-align: center;
`;
const Text = styled.p`
  margin-top: 10px;
  text-align: center;
  color: ${(props) => props.theme.color.primary};
`;
const Button = styled(Button_Primary)`
  margin: 80px auto;
`;

export default Error;
