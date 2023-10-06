import React from "react";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";

export const RequestEmail_Input = ErrorPicker(
  ({ email, setEmail }) => {
    const handleEmail = (e) => setEmail(e.target.value);

    const render = (
      <Input type="email" value={email || ""} onChange={handleEmail} />
    );
    return render;
  },
  ["RequestEmail_Input"]
);

const Input = styled.input`
  display: block;
  margin: 17px auto 0;
  padding: 0 10px;
  width: 312px;
  height: 36px;
  font-size: 12px;
  color: ${(props) => props.theme.color.text.black};
  background: #fff;
  border: none;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`;
