import { useFormik } from "formik";
import React, { createContext } from "react";

const Context = createContext();

export const Formik = ({ children, ...props }) => {
  const formikHandler = useFormik(props);
  return (
    <Context.Provider value={formikHandler}>
      {typeof children === "function" ? children(formikHandler) : children}
    </Context.Provider>
  );
};
