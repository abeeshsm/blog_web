"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  // ✅ Yup validation schema
  const LoginSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Admin Login
        </h1>

       <Formik
  initialValues={{
    email: "",
    password: "",
  }}
  validationSchema={LoginSchema}
  onSubmit={async (values, { setSubmitting, setStatus }) => {

    // ✅ hardcoded admin credentials
    const ADMIN_EMAIL = "abeesh@ordinal.in";
    const ADMIN_PASSWORD = "12345678";

    if (
      values.email === ADMIN_EMAIL &&
      values.password === ADMIN_PASSWORD
    ) {
      // ✅ success → go next page
      localStorage.setItem("adminToken", "dummy-admin-token");
      router.push("/admindashboard");
    } else {
      // ❌ wrong credentials
      setStatus("Invalid email or password");
    }

    setSubmitting(false);
  }}
>

          {({ isSubmitting, status }) => (
            <Form>
              {status && (
                <p className="text-red-500 text-sm mb-3">
                  {status}
                </p>
              )}

              {/* Email */}
              <label className="block mb-1 font-medium">
                Email
              </label>
              <Field
                name="email"
                type="email"
                className="w-full border p-2 rounded mb-1"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mb-3"
              />

              {/* Password */}
              <label className="block mb-1 font-medium">
                Password
              </label>
              <Field
                name="password"
                type="password"
                className="w-full border p-2 rounded mb-1"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mb-4"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 disabled:opacity-60"
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
