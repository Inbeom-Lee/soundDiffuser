import React from "react";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";
import { useModal } from "Contexts";
import { Button_Primary, Button_Secondary } from "Components";

export const ListSelectedGroup_ModalDelete = ErrorPicker(
  ({ title, handleDelete }) => {
    const { handleModalClose } = useModal();

    const handleCancel = () => handleModalClose();

    const render = (
      <Container onClick={(e) => e.stopPropagation()}>
        <Text>{title}을 삭제하시겠습니까?</Text>
        <ButtonContainer>
          <Button_Secondary onClick={handleCancel}>취소</Button_Secondary>
          <Button_Primary onClick={handleDelete}>삭제하기</Button_Primary>
        </ButtonContainer>
      </Container>
    );
    return render || null;
  },
  ["ListSelectedGroup_ModalDelete"]
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
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 17px auto 0;
`;
