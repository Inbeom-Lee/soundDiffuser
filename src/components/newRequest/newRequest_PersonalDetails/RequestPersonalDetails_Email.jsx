import React from "react";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";
import { useHandleInput } from "Hooks";

export const RequestPersonalDetails_Email = ErrorPicker(
  ({ email, setDataRequest }) => {
    const handleData = () =>
      setDataRequest((prev) => ({ ...prev, email: tempData }));

    const [tempData, setTempData] = useHandleInput(email || "", handleData);

    const render = (
      <Input type="email" value={tempData} onChange={setTempData} />
    );
    return render;
  },
  ["RequestPersonalDetails_Email"]
);

const Input = styled.input`
  display: block;
  margin: 18px auto 0;
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
