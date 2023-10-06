import React, { useContext } from "react";
import { useMemoState } from "Hooks";

const ContextRequest = React.createContext();
export const useRequest = () => useContext(ContextRequest);
export const RequestProvider = ({ children }) => {
  const [dataRequest, setDataRequest] = useMemoState();
  const [textSearch, setTextSearch] = useMemoState("");
  const [listSearch, setListSearch] = useMemoState();
  const [nextPageToken, setNextPageToken] = useMemoState();
  const [scrollPosition_References, setScrollPosition_References] =
    useMemoState();

  const memoTotal = {
    dataRequest,
    setDataRequest,
    textSearch,
    setTextSearch,
    listSearch,
    setListSearch,
    nextPageToken,
    setNextPageToken,
    scrollPosition_References,
    setScrollPosition_References,
  };

  return (
    <ContextRequest.Provider value={memoTotal}>
      {children}
    </ContextRequest.Provider>
  );
};
