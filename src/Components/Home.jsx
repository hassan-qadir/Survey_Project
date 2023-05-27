import React from "react";
import UserMain from "./UserMain";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import { Toolbar } from "@mui/material";
import Header from "./Header";
import SideNav from "./SideNav";

const drawerWidth = 230;

const Home = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header />
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
            {SideNav}
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
            {SideNav}
          </Drawer>
        </Box>
        <Box component="main">
          <Toolbar />
          <div
            className="container p-4 mt-3"
            style={{ height: "20vh", background: "var(--primary-color)" }}
          >
            <h3 className="text-white mx-4">Knowledge Base</h3>
            <div className="container mt-3 p-4 bg-light">
              <UserMain />
            </div>
            <div className="container mt-5">
              <div className="row">
                <div className="col-lg-3 col-md-3">
                  <div
                    className="card"
                    style={{ width: "17rem", background: "rgb(0, 0, 247)" }}
                  >
                    <div className="card-body text-white">
                      <p className="card-title ">Total earnings</p>
                      <h5 className="card-subtitle mb-2 ">$0</h5>
                      <hr />
                      <Link
                        to={""}
                        className="text-white"
                        style={{ textDecoration: "none" }}
                      >
                        View Report
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3">
                  <div
                    className="card"
                    style={{ width: "17rem", background: "rgb(0, 164, 71)" }}
                  >
                    <div className="card-body text-white">
                      <p className="card-title">Total spent</p>
                      <h5 className="card-subtitle mb-2">$0</h5>
                      <hr />
                      <Link
                        to={""}
                        className="text-white"
                        style={{ textDecoration: "none" }}
                      >
                        View Report
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3">
                  <div
                    className="card"
                    style={{ width: "17rem", background: "rgb(202, 0, 0)" }}
                  >
                    <div className="card-body text-white">
                      <p className="card-title">Survey Taken</p>
                      <h5 className="card-subtitle mb-2 ">0</h5>
                      <hr />
                      <Link
                        to={""}
                        className="text-white"
                        style={{ textDecoration: "none" }}
                      >
                        View Task
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3">
                  <div
                    className="card"
                    style={{
                      width: "17rem",
                      background: "rgb(202, 142, 71)",
                    }}
                  >
                    <div className="card-body text-white">
                      <p className="card-title">Survey Created</p>
                      <h5 className="card-subtitle mb-2">0</h5>
                      <hr />
                      <Link
                        to={""}
                        className="text-white"
                        style={{ textDecoration: "none" }}
                      >
                        View Requests
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Home;
