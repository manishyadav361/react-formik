import React from "react";
import { useFormik } from "formik";
// determine the errors you want to handle and pass it to the useFormik hook as validate
const validate = (values) => {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = "required";
  } else if (values.firstname.length < 6) {
    errors.firstname = "firstname must have atleast 6 characters";
  }
  if (!values.lastname) {
    errors.lastname = "required";
  } else if (values.lastname.length < 6) {
    errors.lastname = "lastname must have atleast 6 characters";
  }
  if (!values.password) {
    errors.password = "required";
  } else if (values.password.length < 6) {
    errors.password = "passsword must have atleast 6 characters";
  }
  if (!values.email) {
    errors.email = "required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "invalid email";
  }
  return errors;
};
const Form = () => {
  // useFormik hook returns no of methods and properties using which we can simply our form inputs and error handling
  // initialValues are like input states
  // onSubmit is a function triggers when the user submits a form

  const formik = useFormik({
    initialValues: { firstname: "", lastname: "", email: "", password: "" },
    //passing validation returns an errors object holding error state of all the inputs
    validate,
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
          name="firstname"
          value={formik.values.firstname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {/* useFormik returns a touched property which has all the initialstate values and its default value is false and is true when the input field is visited only those field would be showing error which have been visited */}
        {formik.errors.firstname && formik.touched.firstname ? (
          <p>{formik.errors.firstname}</p>
        ) : null}
        <input
          type="text"
          placeholder="lastname"
          name="lastname"
          value={formik.values.lastname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.lastname && formik.touched.lastname ? (
          <p>{formik.errors.lastname}</p>
        ) : null}
        <input
          type="email"
          placeholder="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email ? (
          <p>{formik.errors.email}</p>
        ) : null}
        <input
          type="password"
          placeholder="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.password && formik.touched.password ? (
          <p>{formik.errors.password}</p>
        ) : null}
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Form;
