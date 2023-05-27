import React from "react";
import UserMain from "./UserMain";
import UsersNavbar from "./UsersNavbar";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import { Toolbar } from "@mui/material";
import Header from "./Header";
import SideNav from "./SideNav";

const drawerWidth = 230;

const Users = (props) => {
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
            <h3 className="text-white mx-4">Blank Starter</h3>
            <div className="container mt-3 p-4 bg-light">
              <UserMain />
            </div>
            <div
              className="container  p-3 bg-light"
              style={{ backgroundColor: "var(--heading-color)" }}
            >
              <UsersNavbar />
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Users;
