import React, { useContext } from "react";
import { useMemoState } from "Hooks";

const ContextHistory = React.createContext();
export const useHistory = () => useContext(ContextHistory);
export const HistoryProvider = ({ children }) => {
  const [email, setEmail] = useMemoState();

  const memoTotal = {
    email,
    setEmail,
  };

  return (
    <ContextHistory.Provider value={memoTotal}>
      {children}
    </ContextHistory.Provider>
  );
};
