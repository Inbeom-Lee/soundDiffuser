import React from "react";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";
import svgSearch from "Asset/svg/search.svg";

export const RequestReferences_SearchInput = ErrorPicker(
  ({ textSearch, setTextSearch, setListSearch, setRunSearching }) => {
    //돋보기 클릭시
    const handleSearch = () => {
      //검색어가 없을 경우, 입력 안내
      if (!textSearch) return alert("검색어를 입력해주세요");

      setListSearch();
      setRunSearching(true);
    };

    //인풋에서 엔터 입력시
    const handleEnter = (e) => e.key === "Enter" && handleSearch();

    const render = (
      <>
        <Text>작업에 참고할 만한 레퍼런스 음악이 있나요?</Text>
        <Container>
          <Input
            value={textSearch}
            onChange={(e) => setTextSearch(e.target.value)}
            onKeyDown={handleEnter}
            placeholder="Youtube주소나 검색어를 입력해주세요."
          />
          <IconSearch src={svgSearch} onClick={handleSearch} />
        </Container>
      </>
    );
    return render || null;
  },
  ["RequestReferences_SearchInput"]
);

const Text = styled.p`
  margin-top: 91px;
  text-align: center;
  font-weight: 900;
  color: ${(props) => props.theme.color.text.white};
`;
const Container = styled.div`
  position: sticky;
  top: 56px;
  margin: 17px 0 43px;
  width: 100%;
  height: 47px;
  background: ${(props) => props.theme.color.grey3};
  z-index: 1;
`;
const Input = styled.input`
  padding-left: 41px;
  width: calc(100% - 60px);
  height: 100%;
  font-size: 13px;
  color: ${(props) => props.theme.color.text.white};
  background: none;
  border: none;

  &::placeholder {
    font-weight: 900;
    font-size: 13px;
    color: ${(props) => props.theme.color.grey4};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const IconSearch = styled.img`
  position: absolute;
  top: 5px;
  right: 21px;

  &:hover {
    cursor: pointer;
  }
`;
