import styled from "styled-components";

export const InputType1_Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InputType1_Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
`;
export const InputType1_Text = styled.input`
  padding: 0 10px;
  width: 100%;
  height: 45px;
  border: 1px solid ${(props) => props.theme.color.grey3};
  border-radius: 5px;
  transition: 0.3s;

  &::placeholder {
    color: ${(props) => props.theme.color.grey3};
  }
  &:focus {
    outline: none;
  }

  @media (min-width: 500px) {
    max-width: 250px;
  }
`;
export const InputType1_Number = styled(InputType1_Text).attrs(() => ({
  type: "number",
  onWheel: (e) => e.target.blur(),
}))`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const InputType1_Select = styled.select`
  width: 100%;
  height: 45px;
  background: ${(props) => props.theme.background.white};
  border: 1px solid ${(props) => props.theme.color.grey3};
  border-radius: 5px;
  transition: 0.2s;

  &:hover {
    cursor: text;
  }
  &:focus {
    outline: none;
  }
  @media (min-width: 500px) {
    max-width: 250px;
  }
`;
export const InputType1_Textarea = styled.textarea`
  padding: 10px;
  width: 100%;
  max-width: 500px;
  height: 80px;
  border: 1px solid ${(props) => props.theme.color.grey3};
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`;

export const InputType1_Checkbox_Container = styled.div`
  display: flex;
`;
export const InputType1_Checkbox_Label = styled.label`
  margin-right: 20px;
  word-break: keep-all;

  &:hover {
    cursor: pointer;
  }
`;
export const InputType1_Checkbox_Check = styled.input.attrs(() => ({
  type: "checkbox",
}))`
  margin-right: 5px;

  &:hover {
    cursor: pointer;
  }
`;
