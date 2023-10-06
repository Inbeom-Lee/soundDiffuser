import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ErrorPicker from "ErrorPicker";
import { useHistory } from "Contexts";
import {
  HistoryRequest_Completed,
  HistoryRequest_Email,
  HistoryRequest_Info,
} from "Components/historyRequest/index";

export const HistoryRequest = ErrorPicker(() => {
  const { email } = useHistory();

  const reset = <Navigate to="email" replace />;
  const render = (
    <Routes>
      <Route path="email" element={<HistoryRequest_Email />} />
      <Route path="info" element={email ? <HistoryRequest_Info /> : reset} />
      <Route
        path="completed/:uidRequest"
        element={<HistoryRequest_Completed />}
      />
      <Route path="/*" element={reset} />
    </Routes>
  );
  return render;
}, ["Request"]);

export default HistoryRequest;
