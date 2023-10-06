import { useState, useMemo, useCallback } from "react";
import isEqual from "lodash.isequal";

export const useMemoState = (initialState) => {
  const [state, setState] = useState(initialState);

  const memoState = useMemo(() => state, [state]);

  const memoSetState = useCallback((getState) => {
    typeof getState === "function"
      ? setState((prev) => {
          const callback = getState(prev);
          const newData = isEqual(prev, callback) ? prev : callback;

          return newData;
        })
      : setState(getState);
  }, []);

  return [memoState, memoSetState];
};
