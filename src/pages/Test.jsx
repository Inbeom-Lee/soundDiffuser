import React from "react";
import axios from "axios";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";
import { readColFS } from "Firebase";

const Test = ErrorPicker(() => {
  const handleTest = async () => {
    try {
      // const result = await axios.post(
      //   "http://localhost:5001/sounddiffuser-4e8ae/asia-northeast3/api/mail/send",
      //   {
      //     apiKey: process.env.API_KEY,
      //     email: "developer@riif.co.kr",
      //   }
      // );
      // console.log(result);
    } catch (err) {
      const { status, data } = err?.response || {};

      data ? console.log(status, data) : console.log(err);
    }
  };

  const render = (
    <Container>
      <Button onClick={handleTest}>test</Button>
    </Container>
  );
  return render || null;
}, ["Request_References"]);

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
const Button = styled.button`
  width: 250px;
  height: 40px;
`;

export default Test;
