import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const YupForm = () => {
  // useFormik hook returns no of methods and properties using which we can simply our form inputs and error handling
  // initialValues are like input states
  // onSubmit is a function triggers when the user submits a form

  const formik = useFormik({
    initialValues: { firstname: "", lastname: "", email: "", password: "" },
    validationSchema: Yup.object({
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
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      {/* handlesubmit is provided by useformik to handle the form submit */}
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
        {/* useFormik hook has predefined handlechange method  */}
        {/* values property returns the initial state values  */}
        <input
          type="text"
          placeholder="firstname"
          {...formik.getFieldProps("firstname")}
        />

        {/* useFormik returns a touched property which has all the initialstate values and its default value is false and is true when the input field is visited only those field would be showing error which have been visited */}
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
    </div>
  );
};

export default YupForm;
