import React from "react";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";

export const RequestReferencesSearch_ItemsLoading = ErrorPicker(() => {
  const render = (
    <>
      <_Item />
      <_Item />
      <_Item />
      <_Item />
      <_Item />
      <_Item />
      <_Item />
      <_Item />
    </>
  );
  return render;
}, ["RequestReferencesSearch_ItemsLoading"]);

const _Item = React.memo(() => (
  <Container>
    <EmptyImage />
    <div style={{ width: "100%" }}>
      <EmptyText style={{ height: "14px" }} />
      <EmptyText style={{ marginTop: "4px", height: "14px" }} />
      <Wrapper>
        <EmptyThumbnailChannel />
        <EmptyText style={{ width: "40%", height: "13px" }} />
      </Wrapper>
      <EmptyText style={{ marginTop: "6px", height: "10px" }} />
      <EmptyText style={{ marginTop: "3px", width: "70%", height: "10px" }} />
    </div>
  </Container>
));

const Container = styled.div`
  display: flex;
  gap: 9px;
  padding: 12px 18px;
  width: 100%;
  background: ${(props) => props.theme.color.grey3};
`;
const EmptyImage = styled.div`
  flex-shrink: 0;
  width: 144px;
  height: 94px;
  border-radius: 3px;
  background: ${(props) => props.theme.color.grey4};
`;
const EmptyText = styled.div`
  width: 100%;
  background: ${(props) => props.theme.color.grey4};
  border-radius: 3px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 7px;
`;
const EmptyThumbnailChannel = styled.div`
  margin-right: 10px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${(props) => props.theme.color.grey4};
`;
