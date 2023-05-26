import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRead } from "../feature/ReadSlice";
import UserMain from "./UserMain";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import { Toolbar, ListItem, List, ListItemText } from "@mui/material";

const drawerWidth = 240;

const Takeservey = (props) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("loggedIn"));
  useEffect(() => {
    dispatch(userRead());
  }, []);

  const { users } = useSelector((state) => state.read);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <div>
        <h6
          className="text-center mt-4"
          style={{ fontWeight: "bold", color: "var(--body-bg)" }}
        >
          Poll shark
        </h6>
        <Toolbar />

        <List>
          <ListItem>
            <ListItemText>
              <ul className="navbar-nav text-center ">
                <li className="nav-item mb-3">
                  <Link className="nav-link text-dark" to={"/Takeservey"}>
                    Take Survey
                  </Link>
                </li>
              </ul>
            </ListItemText>
          </ListItem>
        </List>
      </div>
      <Toolbar />
      <Toolbar />
      <Toolbar />
      <Toolbar />
      <Toolbar />
      <Toolbar />
      <Toolbar className="bg-light mt-5">
        <h6 className="text-muted text-center">
          <small>
            <span style={{ fontWeight: "bold" }}>login : {user.name}</span>
          </small>
        </h6>
      </Toolbar>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
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
                <li>
                  <Link class="dropdown-item" to={""}>
                    About
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to={""}>
                    Contact
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
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                background: "white",
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main">
          <Toolbar />
          <div
            className="container p-4 mt-4"
            style={{ height: "20vh", background: "var(--primary-color)" }}
          >
            <div className="container mt-2 p-4 bg-light">
              <UserMain />
            </div>
            <div className="container mt-4">
              <h5>Top Surveys</h5>
              <hr />
              <div className="row mt-4">
                {Object.entries(users).map(([key, user]) => (
                  <div
                    className="card bg-light mx-3"
                    key={key}
                    style={{ width: "18rem", textDecoration: "none" }}
                  >
                    <div
                      className="d-flex justify-content-between pt-2 bg-light"
                      style={{
                        color: "var(--body-bg)",
                      }}
                    >
                      <h5 className="">
                        <small>{`${user.values.title}`}</small>
                      </h5>
                      <h6 className="">
                        <small>{`$${user.values.amount}`}</small>
                      </h6>
                    </div>

                    <h6 className="">
                      <small>{`Description of Survey : ${user.values.description}`}</small>
                    </h6>
                    <hr />
                    <p className="text-muted">
                      <small>{`Est Time - ${user.values.estimatedtime} Min`}</small>
                    </p>
                    <Link
                      className="stretched-link"
                      to={`/Questionsurvey/${key}`}
                    ></Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Takeservey;
