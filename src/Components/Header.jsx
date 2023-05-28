import React from "react";
import AppBar from "@mui/material/AppBar";
import { Link } from "react-router-dom";
import { Toolbar } from "@mui/material";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { CiLogin } from "react-icons/ci";

const drawerWidth = 230;
const Header = () => {
  const user = JSON.parse(localStorage.getItem("loggedIn"));
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          background: "white",
          alignItems: "end",
        }}
      >
        <Toolbar>
          <div class="dropdown">
            <Link
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              href="#"
              data-toggle="dropdown"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-circle"
                height="30"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </Link>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <div
                className="row m-1 bg-light py-1"
                style={{ paddingRight: "2rem" }}
              >
                <div className="col-lg-2 px-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    className="rounded-circle"
                    height="30"
                    alt="Black and White Portrait of a Man"
                    loading="lazy"
                  />
                </div>
                <div className="col-lg-4 " style={{ fontSize: "13px" }}>
                  <span style={{ fontWeight: "bold" }}>
                    {user && user.name}
                  </span>
                  <br />
                  {user && user.email}
                </div>
              </div>
              <div style={{ fontSize: "0.9rem" }}>
                <li>
                  <Link class="dropdown-item" to={""}>
                    <AiOutlineUser /> Account
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to={""}>
                    <MdOutlineVerifiedUser /> Verify
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to={""}>
                    <AiOutlineUser /> FAQs
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to={""}>
                    <AiOutlineUser /> Contact
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to={"/login"}
                    onClick={() => {
                      localStorage.removeItem("loggedIn");
                      localStorage.removeItem("name");
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <CiLogin /> Logout
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
