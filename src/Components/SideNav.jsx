import React from "react";
import { GrHome } from "react-icons/gr";
import { CgShoppingBag } from "react-icons/cg";
import { BsCardText } from "react-icons/bs";
import { Toolbar, ListItem, List, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const user = JSON.parse(localStorage.getItem("loggedIn"));
const SideNav = (
  <>
    <div>
      <h6
        className="text-center mt-4"
        style={{ fontWeight: "bold", color: "rgb(144, 81, 255)" }}
      >
        Poll shark
      </h6>
      <Toolbar />

      <List>
        <ListItem>
          <ListItemText>
            <ul className="navbar-nav ">
              <li className="nav-item mb-3">
                <Link
                  className="nav-link text-dark d-flex align-items-center mx-2"
                  to={"/"}
                >
                  <GrHome /> <span className="mx-2">Home</span>
                </Link>
              </li>
              <li className="nav-item mb-3">
                <Link
                  className="nav-link text-dark d-flex align-items-center mx-2"
                  to={"/Survey"}
                >
                  <CgShoppingBag /> <span className="mx-2">Survey</span>
                </Link>
              </li>
              <li className="nav-item mb-3">
                <Link
                  className="nav-link text-dark  d-flex align-items-center mx-2"
                  to={"/topics"}
                >
                  <BsCardText /> <span className="mx-2">Topics</span>
                </Link>
              </li>
            </ul>
          </ListItemText>
        </ListItem>
      </List>
    </div>
    <Toolbar className="bg-light" style={{ marginTop: "324px" }}>
      <h6 className="text-muted text-center">
        <small>
          logged in as :<span> {user && user.name}</span>
        </small>
      </h6>
    </Toolbar>
  </>
);

export default SideNav;
