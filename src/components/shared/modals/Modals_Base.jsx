import React, { useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { ModalProvider } from "Contexts";

export const Modals_Base = React.memo(
  ({ showModal, setShowModal, handleClose, values, children }) => {
    const refBase = useRef();
    const { status, transition } = showModal || {};

    useEffect(() => {
      if (status) {
        setTimeout(
          () => setShowModal((prev) => ({ ...prev, transition: true })),
          20
        );
        refBase.current.focus();
      }
    }, [status]);

    const handleModalClose = useCallback(async (e) => {
      try {
        e?.stopPropagation();
        await handleClose?.();

        setShowModal((prev) => ({ ...prev, transition: false }));
        setTimeout(() => {
          setShowModal((prev) => ({ ...prev, status: false, message: "" }));
        }, 200);
      } catch (err) {
        console.log(err);
      }
    });

    const handleESC = (e) => e.keyCode === 27 && handleModalClose(e);

    const value = { ...(values || {}), handleModalClose };

    const render = ReactDOM.createPortal(
      <Base ref={refBase} $show={status} tabIndex="0" onKeyDown={handleESC}>
        <TransitionBase
          className="modalBase"
          $show={transition}
          onClick={handleModalClose}
        >
          {showModal && <ModalProvider value={value}>{children}</ModalProvider>}
        </TransitionBase>
      </Base>,
      document.getElementById("rootModal")
    );
    return render || null;
  }
);

const Base = styled.div`
  display: ${(props) => (props.$show ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10000;

  &:hover {
    cursor: auto;
  }
`;
const TransitionBase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  visibility: ${(props) => (props.$show ? "visible" : "hidden")};
  opacity: ${(props) => (props.$show ? 1 : 0)};
  background: rgba(0, 0, 0, 0.5);
  transition: 0.2s;
`;
