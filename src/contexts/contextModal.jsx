import React, { useContext } from "react";

const ModalContext = React.createContext();
export const useModal = () => useContext(ModalContext);
export const ModalProvider = (props) => {
  const value = { ...(props?.value || {}) };

  return (
    <ModalContext.Provider value={value}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
