import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={Yup.object({
        username: Yup.string().required("Username is required."),
        email: Yup.string().email("Invalid email").required("Email is required."),
        password: Yup.string().required("Password is required."),
      })}
      onSubmit={(values) => {
        console.log("User registered:", values);
        alert("Registration successful!");
      }}
    >
      <Form className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md mx-auto mt-10">
        <h1 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          User Registration (Formik)
        </h1>

        {/* Username */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Username</label>
          <Field
            name="username"
            type="text"
            className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
          />
          <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Email</label>
          <Field
            name="email"
            type="email"
            className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
          />
          <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Password</label>
          <Field
            name="password"
            type="password"
            className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
          />
          <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Register
        </button>
      </Form>
    </Formik>
  );
}

export default FormikForm;
