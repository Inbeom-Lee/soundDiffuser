import React, { useState, useMemo } from "react";
import styled from "styled-components";

import ErrorPicker from "ErrorPicker";

import { Button_DisableToPrimary, Modals_Base } from "Components";
import {
  RequestPersonalDetailsButton_Modal,
  RequestPersonalDetailsButton_Loading,
} from "./requestPersonalDetails_Button/index";

export const RequestPersonalDetails_Button = ErrorPicker(
  ({ dataRequest }) => {
    const [showModal, setShowModal] = useState({
      status: false,
      transition: false,
    });
    const [isLoading, setIsLoading] = useState(false);

    const { email } = dataRequest || {};

    const checkEmail = useMemo(() => {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const testEmail = pattern.test(email);

      return testEmail;
    }, [email]);

    const handleShow = () =>
      setShowModal((prev) => ({ ...prev, status: true }));

    const render = (
      <>
        <Button $active={checkEmail} onClick={handleShow}>
          다음
        </Button>
        <Modals_Base showModal={showModal} setShowModal={setShowModal}>
          <RequestPersonalDetailsButton_Modal
            dataRequest={dataRequest}
            setIsLoading={setIsLoading}
          />
          <RequestPersonalDetailsButton_Loading isLoading={isLoading} />
        </Modals_Base>
      </>
    );
    return render;
  },
  ["RequestPersonalDetails_Button"]
);

const Button = styled(Button_DisableToPrimary)`
  margin: 29px auto 0;
`;
