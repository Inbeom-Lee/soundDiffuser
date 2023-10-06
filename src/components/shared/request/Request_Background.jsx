import React from "react";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";

export const Request_Background = ErrorPicker(() => {
  const render = (
    <Container>
      <Box1 />
      <Box2 />
      <Box3 />
      <Box4 />
    </Container>
  );
  return render || null;
}, ["Request_Background"]);

const Container = styled.div`
  position: fixed;
  bottom: 115px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 192px;
  max-width: 500px;
  z-index: 0;
`;
const Box1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  height: 48px;
  background: ${(props) => props.theme.color.primary};
`;
const Box2 = styled(Box1)`
  top: 48px;
  left: 40%;
  width: 20%;
`;
const Box3 = styled(Box2)`
  top: 96px;
  left: 60%;
`;
const Box4 = styled(Box2)`
  top: 144px;
  left: 80%;
`;
