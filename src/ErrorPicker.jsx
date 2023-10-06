import React, { useEffect, isValidElement } from "react";
import { useNavigate } from "react-router-dom";
import isEqual from "lodash.isequal";

const ErrorPicker = (Component, refComponent) =>
  React.memo(
    (props) => {
      try {
        const test = Component(props);
        const checkTest = isValidElement(test);

        return checkTest ? test : null;
      } catch (err) {
        const navigate = useNavigate();

        console.log(err);

        useEffect(() => {
          // navigate("/error");
        }, []);

        return null;
      }
    },
    (prevProps, newProps) => isEqual(prevProps, newProps)
  );

export default ErrorPicker;
