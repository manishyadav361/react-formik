import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
const FormComponents = () => {
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
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100vh",
            justifyContent: "center",
          }}
        >
          <Field name="firstname" type="text" placeholder="firstname" />
          <ErrorMessage name="firstname" />
          <Field name="lastname" type="text" placeholder="lastname" />
          <ErrorMessage name="lastname" />
          <Field name="email" type="text" placeholder="email" />
          <ErrorMessage name="email" />
          <Field name="password" type="text" placeholder="password" />
          <ErrorMessage name="password" />
          <Field
            name="colors"
            as="select"
            className="my-select"
            style={{ width: "178px" }}
          >
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Field>
          <button type="submit" disabled={formik.isSubmitting ? true : false}>
            submit
          </button>
          <button type="reset" onReset={formik.handleReset}>
            reset
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponents;
