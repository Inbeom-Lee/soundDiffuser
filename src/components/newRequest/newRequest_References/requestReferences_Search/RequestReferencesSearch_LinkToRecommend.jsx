import React from "react";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";

export const RequestReferencesSearch_LinkToRecommend = ErrorPicker(
  ({ setPageRef }) => {
    const handleLink = () => setPageRef("recommend");

    const render = (
      <Container>
        <Link onClick={handleLink}>추천 레퍼런스 음악 보기</Link>
      </Container>
    );
    return render || null;
  },
  ["RequestReferencesSearch_LinkToRecommend"]
);

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: sticky;
  top: 96px;
  padding: 17px 0 18px;
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
