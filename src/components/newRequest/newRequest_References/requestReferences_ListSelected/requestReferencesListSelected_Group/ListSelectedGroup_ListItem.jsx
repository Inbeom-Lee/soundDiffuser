import React from "react";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";
import svgCloseX from "Assets/svg/closeX.svg";

export const ListSelectedGroup_ListItem = ErrorPicker(
  ({ title, handleShow }) => {
    const render = (
      <Container>
        <Title>{title}</Title>
        <Icon src={svgCloseX} onClick={handleShow} />
      </Container>
    );
    return render || null;
  },
  ["ListSelectedGroup_ListItem"]
);

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 26px;
  padding-right: 35px;
  height: 37px;
  background: ${(props) => props.theme.color.grey1};
`;
const Title = styled.p`
  font-family: "appleSD";
  font-size: 11px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Icon = styled.img`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);

  &:hover {
    cursor: pointer;
  }
`;
