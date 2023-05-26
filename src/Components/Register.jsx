import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { addState } from "../feature/AuthSlice";

const initialValues = {
  name: "",
  email: "",
  password: "",
  role: "user",
};

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const changeData = useSelector((state) => state.user.addData);
  const { values, handleChange, touched, handleSubmit, errors, handleBlur } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        dispatch(addState(values));
        toast.success("SignUp success!", {
          position: "top-right",
          autoClose: 1000,
        });
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      },
    });
  useEffect(() => {
    localStorage.setItem("login", JSON.stringify(changeData));
  }, [changeData]);

  return (
    <>
      <section style={{ height: "95vh", background: "rgb(144, 81, 255)" }}>
        <div className=" d-flex align-items-center ">
          <div className="container">
            <h5 className="text-white">Poll Shark</h5>
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
              <div className="col-12 col-md-9 col-lg-6 col-xl-6 mt-3">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-3">
                    <div className="bg-light p-2">
                      <span style={{ color: "grey" }}>
                        <b>Sign up</b>
                      </span>
                      <h4 className="mb-1">
                        <b>Let's get you started!</b>
                      </h4>
                    </div>

                    <hr />
                    <form onSubmit={handleSubmit}>
                      <div className=" mb-1">
                        <label htmlFor="name" className="text-dark">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          autoComplete="off"
                          className="form-control"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          style={{ boxShadow: "none" }}
                        />
                        {errors.name && touched.name ? (
                          <p style={{ color: "#D60265" }}>{errors.name}</p>
                        ) : null}
                      </div>

                      <div className=" mb-1">
                        <label htmlFor="email" className="text-dark">
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          autoComplete="off"
                          className="form-control"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          style={{ boxShadow: "none" }}
                        />
                        {errors.email && touched.email ? (
                          <p style={{ color: "#D60265" }}>{errors.email}</p>
                        ) : null}
                      </div>

                      <div className=" mb-1">
                        <label htmlFor="password" className="text-dark">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          autoComplete="off"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          style={{ boxShadow: "none" }}
                        />
                        {errors.password && touched.password ? (
                          <p style={{ color: "#D60265" }}>{errors.password}</p>
                        ) : null}
                      </div>
                      <div className="mb-2 mt-4 ">
                        <select
                          name="role"
                          class="form-select mb-4"
                          aria-label=".form-select-lg example"
                          onChange={handleChange}
                          value={values.role}
                          onBlur={handleBlur}
                          style={{ boxShadow: "none" }}
                        >
                          <option value="user">User</option>
                          <option value="admin">Admin</option>
                        </select>
                      </div>
                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className=" btn-lg"
                          style={{
                            backgroundColor: "rgb(84, 0, 255)",
                            border: "none",
                            color: "white",
                            width: "50%",
                          }}
                        >
                          Sign up
                        </button>
                      </div>
                      <p className="text-center text-muted mt-3 mb-0">
                        Have already an account?{" "}
                        <Link
                          to="/login"
                          className="fw-bold text-body"
                          style={{ textDecoration: "none" }}
                        >
                          Sign in here
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
      <ToastContainer />
    </>
  );
};

export default Register;
