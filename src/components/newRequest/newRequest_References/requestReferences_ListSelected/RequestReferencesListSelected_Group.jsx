import React from "react";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";
import svgCloseX from "Asset/svg/closeX.svg";

export const RequestReferencesListSelected_Group = ErrorPicker(
  ({ item, handleDelete }) => {
    const { id, snippet } = item;
    const { title } = snippet;

    const handler = () => handleDelete(id.videoId);

    const render = (
      <Container>
        <Title>{title}</Title>
        <Icon src={svgCloseX} onClick={handler} />
      </Container>
    );
    return render || null;
  },
  ["RequestReferencesListSelected_Group"]
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
