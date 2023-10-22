import React from "react";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";

export const RequirementsEditorGroup_Deco = ErrorPicker(() => {
  const render = (
    <>
      <DecoContainer>
        <DecoWrapper>
          <DecoDotSmall />
          <DecoDotBig />
        </DecoWrapper>
        <DecoWrapper>
          <DecoDotSmall />
          <DecoDotBig />
        </DecoWrapper>
        <DecoWrapper>
          <DecoDotSmall />
          <DecoDotBig />
        </DecoWrapper>
        <DecoWrapper>
          <DecoDotSmall />
          <DecoDotBig />
        </DecoWrapper>
      </DecoContainer>
      <DecoBorder />
    </>
  );
  return render;
}, ["RequirementsEditorGroup_Deco"]);

const DecoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 12px;
  width: 100%;
`;
const DecoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
`;
const DecoDotBig = styled.div`
  width: 9px;
  height: 9px;
  background: ${(props) => props.theme.color.grey1};
  border-radius: 50px;
`;
const DecoDotSmall = styled(DecoDotBig)`
  width: 5px;
  height: 5px;
`;
const DecoBorder = styled.div`
  margin-top: 14px;
  width: 100%;
  height: 3px;
  border-radius: 1.5px;
  background: ${(props) => props.theme.color.grey1};
`;
