import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { collection, getDocs } from "firebase/firestore";
import ErrorPicker from "ErrorPicker";
import { useModal } from "Contexts";
import { soundDiffuserFS, writeFS } from "Firebase";
import { url_CloudFunction } from "Constants";
import { Button_Primary, Button_Secondary } from "Components";

export const RequestPersonalDetailsButton_Modal = ErrorPicker(
  ({ dataRequest, setIsLoading }) => {
    const navigate = useNavigate();
    const { handleModalClose } = useModal();
    const { email } = dataRequest || {};

    const handleCancel = () => handleModalClose();

    const handleComplete = async () => {
      try {
        setIsLoading(true);

        //요청 수 불러오기 및 id 생성
        const getCol = await getDocs(collection(soundDiffuserFS, "requests"));

        const colLength = getCol.size + 1;
        const paddedNumber = colLength.toString().padStart(6, "0");
        const uidRequest = `SD${paddedNumber}`;

        //데이터 저장
        const newRequest = {
          ...dataRequest,
          uid: uidRequest,
          timeRequested: new Date().getTime(),
        };
        await writeFS(newRequest, ["requests", uidRequest]);

        //이메일 발송
        await axios.post(`${url_CloudFunction}/mail/send`, {
          apiKey: process.env.API_KEY,
          dataRequest: newRequest,
        });

        //라우팅
        navigate(`/historyRequest/completed/${uidRequest}`);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        console.log(err);
      }
    };

    const render = (
      <Container onClick={(e) => e.stopPropagation()}>
        <Text>
          {email}
          <br />
          문의를 완료하시겠습니까?
        </Text>
        <ButtonContainer>
          <Button_Secondary onClick={handleCancel}>취소</Button_Secondary>
          <Button_Primary onClick={handleComplete}>완료하기</Button_Primary>
        </ButtonContainer>
      </Container>
    );
    return render || null;
  },
  ["RequestPersonalDetailsButton_Modal"]
);

const Container = styled.div`
  width: 318px;
  padding: 20px;
  background: ${(props) => props.theme.color.background.white};
  border-radius: 5px;
`;
const Text = styled.p`
  line-height: 23px;
  font-weight: 700;
  font-size: 15px;
  color: ${(props) => props.theme.color.text.black};
  text-align: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 17px auto 0;
`;
