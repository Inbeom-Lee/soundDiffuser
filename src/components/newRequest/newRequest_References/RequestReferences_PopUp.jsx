import React from "react";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";
import { Modals_Base, Button_Primary } from "Components";

export const RequestReferences_PopUp = ErrorPicker(
  ({ showPopUp, setShowPopUp }) => {
    const { message } = showPopUp;

    const handleButton = () => setShowPopUp({ status: false, message: "" });
    const handleClose = () => {
      setShowPopUp((prev) => ({ ...prev, transition: false }));
      setTimeout(() => {
        setShowPopUp((prev) => ({ ...prev, status: false, message: "" }));
      }, 200);
    };

    const render = (
      <Modals_Base showModal={showPopUp} setShowModal={setShowPopUp}>
        <Container onClick={(e) => e.stopPropagation()}>
          {message ? (
            <>
              <Text>{message}</Text>
              <Button onClick={handleClose}>확인</Button>
            </>
          ) : (
            <>
              <Text>
                현재 검색어 조회가 일시적으로 불가합니다.
                <br />
                유튜브에서 직접 조회 후
                <br /> URL로 입력해주세요.
              </Text>
              <Button onClick={handleButton}>유튜브 바로가기</Button>
            </>
          )}
        </Container>
      </Modals_Base>
    );
    return render;
  },
  ["RequestReferences_PopUp"]
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
const Button = styled(Button_Primary)`
  margin: 17px auto 0;
`;
