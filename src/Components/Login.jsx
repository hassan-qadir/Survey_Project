import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../schemas";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiShowAlt, BiHide } from "react-icons/bi";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const [visible, setvisible] = useState(false);
  const { values, handleChange, touched, handleSubmit, errors, handleBlur } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: (values) => {
        const user = JSON.parse(localStorage.getItem("login"));
        if (!user) {
          navigate("/register");
        }
        const matchUser = user.find(
          (item) =>
            values.email === item.email && values.password === item.password
        );
        if (matchUser) {
          localStorage.setItem("loggedIn", JSON.stringify(matchUser));
          if (matchUser.role === "user") {
            toast.success("SignIn success!", {
              position: "top-right",
              autoClose: 1000,
            });
            setTimeout(() => {
              navigate("/Takeservey");
            }, 2000);
          } else {
            toast.success("SignIn success!", {
              position: "top-right",
              autoClose: 1000,
            });
            setTimeout(() => {
              navigate("/");
            }, 2000);
          }
        } else {
          toast.error("Not verify!", {
            position: "top-right",
            autoClose: 1000,
          });
        }
      },
    });

  const onSubmit = () => {};
  return (
    <>
      <section style={{ height: "95vh", background: "rgb(144, 81, 255)" }}>
        <div className=" d-flex align-items-center">
          <div className="container ">
            <h5 className="text-white mt-1">Poll Shark</h5>
            <div className="row d-flex justify-content-end align-items-center">
              <div className="col-12 col-md-9 col-lg-6 col-xl-6">
                <div className="text-white">
                  <button
                    type="button"
                    class="btn btn"
                    style={{
                      background: "white",
                      marginBottom: "2rem",
                      borderRadius: "2rem",
                    }}
                  >
                    Start today!
                  </button>
                  <h2 className="mb-3">
                    Get more leads,more customers,
                    <br />
                    and more revenue
                  </h2>
                  <p>
                    Stop losing leads because of a non-optimized landing
                    page.Start converting your users paying customers and
                    winning more sale today with a new landing page
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-9 col-lg-6 col-xl-6 mt-5">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-4">
                    <div className="text-center"></div>
                    <div className="bg-light p-2">
                      <h4 className="">
                        <b>Welcome Back!</b>
                      </h4>
                      <span style={{ color: "grey" }}>
                        <b>Sign in by typing email and password.</b>
                      </span>
                    </div>
                    <hr />
                    <form onSubmit={handleSubmit}>
                      <div className=" mb-2 mt-4">
                        <label htmlFor="email" className="mt-1 text-dark">
                          Username or Email address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          style={{ boxShadow: "none" }}
                        />
                        {errors.email && touched.email ? (
                          <p style={{ color: "#D60265" }}>{errors.email}</p>
                        ) : null}
                      </div>

                      <div className=" mb-2">
                        <label htmlFor="password" className="text-dark">
                          Password
                        </label>
                        <div className="d-flex justify-content-between">
                          <input
                            type={visible ? "text" : "password"}
                            className="form-control"
                            autoComplete="off"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            style={{ boxShadow: "none" }}
                          />
                          <div
                            className="p-2 bg-light"
                            style={{
                              border: "1px solid lightgrey",
                              borderRadius: "3px",
                            }}
                            onClick={() => setvisible(!visible)}
                          >
                            {visible ? <BiShowAlt /> : <BiHide />}
                          </div>
                        </div>
                        {errors.password && touched.password ? (
                          <p style={{ color: "#D60265" }}>{errors.password}</p>
                        ) : null}
                        <div className="d-flex justify-content-end mt-1">
                          <a href="#!" style={{ textDecoration: "none" }}>
                            Forgot password?
                          </a>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mt-3">
                        <button
                          type="submit"
                          className=" btn-lg"
                          style={{
                            backgroundColor: "rgb(84, 0, 255)",
                            border: "none",
                            color: "white",
                            width: "50%",
                          }}
                          onClick={onSubmit}
                        >
                          Sign in
                        </button>
                      </div>
                      <p className="text-center text-muted mt-3 mb-0">
                        Dont't have an account?{" "}
                        <Link
                          to="/register"
                          className="fw-bold text-body"
                          style={{ textDecoration: "none" }}
                        >
                          Sign up here
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1040 160">
        <path
          fill="#f3f4f5"
          fill-opacity="1"
          d="M0,32L1440,32L1440,320L0,320Z"
        ></path>
      </svg> */}
      <ToastContainer />
    </>
  );
};

export default Login;
