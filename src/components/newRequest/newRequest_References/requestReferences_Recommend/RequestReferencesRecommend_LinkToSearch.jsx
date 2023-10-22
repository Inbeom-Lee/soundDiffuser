import React from "react";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";

export const RequestReferencesRecommend_LinkToSearch = ErrorPicker(
  ({ setPageRef }) => {
    const handleLink = () => setPageRef("search");

    const render = (
      <Container>
        <Link onClick={handleLink}>검색창으로 돌아가기</Link>
      </Container>
    );
    return render || null;
  },
  ["RequestReferencesRecommend_LinkToSearch"]
);

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 26px;
  padding: 40px 0 18px;
  background: ${(props) => props.theme.color.grey1};
  z-index: 1;
`;
const Link = styled.p`
  height: 27px;
  font-weight: 400;
  font-size: 12px;
  color: #fff;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  line-height: 30px;
  text-decoration-line: underline;

  &:hover {
    cursor: pointer;
  }
`;
