import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";
// import { useRequest } from "Contexts";
import { PageAnimation_FadeRise, Button_Primary } from "Components";
import svgLogo from "Assets/logos/logo_SoundDiffuser.svg";

export const Home = ErrorPicker(() => {
  const naviage = useNavigate();

  const handleStart = () => naviage("/newRequest/references");

  const render = (
    <Base>
      <Container duration="1" movement="30">
        <Logo src={svgLogo} />
        <Text>생성형 AI 기반 ‘사운드 디자인’ 전문가 매칭 서비스</Text>
        <Title>
          여러분의 소중한 창작물,
          <br />
          사운드 디퓨저가 함께
          <br />
          소리내어드립니다.
        </Title>
        <Button onClick={handleStart}>음악 의뢰하기</Button>
        <ButtonLink to="/historyRequest/email">의뢰내역 확인하기</ButtonLink>
      </Container>
    </Base>
  );
  return render || null;
}, ["Home"]);

const Base = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  height: 100vh;
  background: ${(props) => props.theme.color.grey1};
  overflow: hidden;
`;
const Container = styled(PageAnimation_FadeRise)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  height: fit-content;
`;
const Logo = styled.img`
  display: block;
  width: 115px;
`;
const Text = styled.p`
  margin-top: 19px;
  width: fit-content;
  font-weight: 700;
  color: #fff;
  text-align: center;
`;
const Title = styled.h4`
  margin-top: 33px;
  width: fit-content;
  font-size: 24px;
  color: #fff;
  text-align: center;
  line-height: 40px;
`;
const Button = styled(Button_Primary)`
  margin-top: 46px;
  width: 253px;
  border-width: 1px;
`;
const ButtonLink = styled(Link)`
  display: block;
  margin-top: 13px;
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  color: #fff;
`;
