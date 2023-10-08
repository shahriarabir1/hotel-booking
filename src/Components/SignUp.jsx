import { Formik } from "formik";
import React, { useState } from "react";
import { Button } from "reactstrap";
import authentic from "./Auth/auth";
import { useDispatch } from "react-redux";

const SignUp = ({ navigate }) => {
  const dispatch = useDispatch();
  const [mode, setMode] = useState("Sign Up");

  const changeMode = () => {
    setMode(mode === "Sign Up" ? "Log in" : "Sign Up");
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        cpassword: "",
        first: "",
        second: "",
        phone: "",
        company: "",
      }}
      onSubmit={(values) => {
        authentic(values.email, values.password, mode, dispatch);
        navigate("/");
      }}
      validate={(v) => {
        const err = {};
        if (!v.email) {
          err.email = "Required";
        } else {
          const valid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          if (!valid.test(v.email)) {
            err.email = "use a valid email";
          }
        }
        if (!v.password) {
          err.password = "Required";
        }
        if (mode === "SignUp") {
          if (!v.cpassword) {
            err.cpassword = "Required";
          }
          if (!v.first) {
            err.first = "Required";
          }
          if (!v.second) {
            err.second = "Required";
          }
          if (!v.phone) {
            err.phone = "Required";
          }
          if (!v.company) {
            err.company = "Required";
          }
          if (v.password !== v.cpassword) {
            err.password = "Password not  matched";
          }
        }

        console.log(err);
        return err;
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <div className="w-screen flex md:justify-center ">
          <div className="md:w-[45%] m-5 bg-gray-200 p-5 rounded-md">
            <form onSubmit={handleSubmit}>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  name="email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={values.email}
                  onChange={handleChange}
                />

                <label
                  htmlFor="email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="password"
                  name="password"
                  id="floating_password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={values.password}
                  onChange={handleChange}
                />
                <label
                  htmlFor="password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>
              {mode === "Sign Up" ? (
                <div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="password"
                      name="cpassword"
                      id="floating_repeat_password"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      value={values.cpassword}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="cpassword"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Confirm password
                    </label>
                  </div>
                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                      <input
                        type="text"
                        name="first"
                        id="floating_first_name"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        value={values.first}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="first"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        First name
                      </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                      <input
                        type="text"
                        name="second"
                        id="floating_last_name"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        value={values.second}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="second"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Last name
                      </label>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                      <input
                        type="tel"
                        name="phone"
                        id="floating_phone"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        value={values.phone}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="phone"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Phone number
                      </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                      <input
                        type="text"
                        name="company"
                        id="floating_company"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        value={values.company}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="company"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Company (Ex. Google)
                      </label>
                    </div>
                  </div>
                </div>
              ) : null}

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
              focus:outline-none focus:ring-blue-300 font-medium rounded-lg
              text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600
              dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {mode === "Sign Up" ? "Sign Up" : "Log in"}
              </button>
              <Button
                onClick={changeMode}
                className="text-white bg-gray-400 hover:bg-green-400 focus:ring-4
              focus:outline-none focus:ring-blue-300 font-medium rounded-lg
              text-sm w-full sm:ml-2 sm:w-auto px-5 py-2.5 mt-2 text-center
              dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Switch to {mode === "Sign Up" ? "Log in" : "Sign Up"}
              </Button>
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default SignUp;
