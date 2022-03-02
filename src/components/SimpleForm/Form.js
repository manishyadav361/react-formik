import React from "react";
import { useFormik } from "formik";

const Form = () => {
  // useFormik hook returns no of methods and properties using which we can simply our form inputs and error handling
  // initialValues are like input states
  // onSubmit is a function triggers when the user submits a form
  const formik = useFormik({
    initialValues: { firstname: "", lastname: "", email: "", password: "" },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      {/* handlesubmit is provided by useformik to handle the form submit */}
      <form onSubmit={formik.handleSubmit}>
        {/* useFormik hook has predefined handlechange method  */}
        {/* values property returns the initial state values  */}
        <input
          type="text"
          placeholder="firstname"
          name="firstname"
          value={formik.values.firstname}
          onChange={formik.handleChange}
        />
        <input
          type="text"
          placeholder="lastname"
          name="lastname"
          value={formik.values.lastname}
          onChange={formik.handleChange}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Form;
