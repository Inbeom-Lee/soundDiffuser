import { useState, useEffect, useRef, useMemo, useCallback } from "react";

export const useHandleInput = (initialData, handler) => {
  const [data, setData] = useState(initialData ?? "");
  const refInitial = useRef(false);

  useEffect(() => {
    initialData !== null &&
      initialData !== undefined &&
      initialData !== data &&
      setData(initialData);
  }, [initialData]);

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      try {
        refInitial.current ? handler() : (refInitial.current = true);
      } catch (err) {}
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [data]);

  const memoData = useMemo(() => data, [data]);
  const handleData = useCallback((e) => {
    const checkValue = e?.target?.value;

    if (e?.target && checkValue === undefined) return;
    if (checkValue || checkValue === "" || checkValue === 0)
      return setData(checkValue);
    if (e === undefined) return;
    setData(e);
  }, []);

  return [memoData, handleData];
};

// 사용예시
// import { useHandleInput } from "Hooks";
// const [tempData, setTempData] = useHandleInput(data, handler);
