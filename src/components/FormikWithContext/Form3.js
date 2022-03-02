// import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Formik } from "./FormContext";
const Form3 = () => {
  return (
    <Formik
      initialValues={{ firstname: "", lastname: "", email: "", password: "" }}
      validationSchema={Yup.object({
        firstname: Yup.string()
          .max(15, "firstname should be max 15 character long.")
          .required("required"),
        lastname: Yup.string()
          .max(15, "lastname should be max 15 character long.")
          .required("required"),
        password: Yup.string()
          .max(15, "password must be max 15 characters")
          .min(6, "firstname should be atleast 6 character long.")
          .required("required"),
        email: Yup.string().email("invalid email").required("required"),
      })}
    >
      {(formik) => (
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100vh",
            justifyContent: "center",
          }}
          onSubmit={formik.handleSubmit}
        >
          <input
            type="text"
            placeholder="firstname"
            {...formik.getFieldProps("firstname")}
          />

          {formik.errors.firstname && formik.touched.firstname ? (
            <p>{formik.errors.firstname}</p>
          ) : null}
          <input
            type="text"
            placeholder="lastname"
            {...formik.getFieldProps("lastname")}
          />
          {formik.errors.lastname && formik.touched.lastname ? (
            <p>{formik.errors.lastname}</p>
          ) : null}
          <input
            type="email"
            placeholder="email"
            {...formik.getFieldProps("email")}
          />
          {formik.errors.email && formik.touched.email ? (
            <p>{formik.errors.email}</p>
          ) : null}
          <input
            type="password"
            placeholder="password"
            {...formik.getFieldProps("password")}
          />
          {formik.errors.password && formik.touched.password ? (
            <p>{formik.errors.password}</p>
          ) : null}
          <button type="submit">submit</button>
        </form>
      )}
    </Formik>
  );
};

export default Form3;
