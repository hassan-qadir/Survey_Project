import React from "react";
import { Link, Outlet } from "react-router-dom";

const UsersNavbar = () => {
  return (
    <>
      {/* <h2 style={{color:'var(--heading-color)',
  fontWeight: '500',
  marginBottom: '2rem'}}>Users</h2> */}
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{ color: "var(--primary-color)", fontSize: "1.1rem" }}
                  to="ActiveSurvey"
                >
                  Active Surveys
                </Link>
              </li>
              <li className="nav-item px-5">
                <Link
                  className="nav-link"
                  style={{ color: "var(--primary-color)", fontSize: "1.1rem" }}
                  to="CreateSurvey"
                >
                  Create Survey
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default UsersNavbar;
