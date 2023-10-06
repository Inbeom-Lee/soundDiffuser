import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ErrorPicker from "ErrorPicker";
import { useRequest } from "Contexts";
import {
  NewRequest_References,
  NewRequest_MusicPurpose,
  NewRequest_MusicMood,
  NewRequest_EditingDetails,
  NewRequest_PersonalDetails,
} from "Components/newRequest";

export const NewRequest = ErrorPicker(() => {
  const { dataRequest, setDataRequest } = useRequest();
  const { listReference } = dataRequest || {};

  useEffect(() => {
    const initialData = {};
    setDataRequest(initialData);

    return () => setDataRequest();
  }, []);

  const getRoute = ({ path, element }) => (
    <Route
      path={path}
      element={listReference ? element : <Navigate to="references" replace />}
    />
  );

  const render = (
    <Routes>
      <Route path="references" element={<NewRequest_References />} />
      {getRoute({
        path: "musicPurpose",
        element: <NewRequest_MusicPurpose />,
      })}
      {getRoute({ path: "musicMood", element: <NewRequest_MusicMood /> })}
      {getRoute({
        path: "editingDetails",
        element: <NewRequest_EditingDetails />,
      })}
      {getRoute({
        path: "personalDetails",
        element: <NewRequest_PersonalDetails />,
      })}
      <Route path="/*" element={<Navigate to="/" replace />} />
    </Routes>
  );
  return render;
}, ["Request"]);

export default NewRequest;
