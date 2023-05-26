import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let login = JSON.parse(localStorage.getItem("loggedIn"));
    if (!login) {
      navigate("/login");
    }
  });
  // let login = JSON.parse(localStorage.getItem("login"));
  // if (login.role === "admin") {
  //   navigate("/");
  // } else {
  //   navigate("/Takeservey");
  // }

  return (
    <>
      <Component />
    </>
  );
};

export default ProtectedRoute;
