import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { RequestProvider, HistoryProvider } from "Contexts";
import { Home } from "Components/home";
import { NewRequest, HistoryRequest } from "./pages/index";

const Error = lazy(() => import("./pages/Error"));
const Test = lazy(() => import("./pages/Test"));

const App = () => {
  return (
    <>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/newRequest/*"
            element={
              <RequestProvider>
                <NewRequest />
              </RequestProvider>
            }
          />
          <Route
            path="/historyRequest/*"
            element={
              <HistoryProvider>
                <HistoryRequest />
              </HistoryProvider>
            }
          />
          <Route path="/error" element={<Error />} />
          <Route path="/test" element={<Test />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
