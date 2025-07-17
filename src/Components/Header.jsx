import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./componentstyle.css";

const drawerWidth = 100;
// router
const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Skill", href: "#skill" },
  { label: "projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", fontSize: "14px" }}
    >
      <Typography
        style={{ fontSize: "15px", fontFamily: "serif" }}
        variant="h6"
        sx={{ my: 2 }}
      >
        Portfolio
      </Typography>
      <Divider />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box id="#" sx={{ display: "flex", color: "black" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Portfolio
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
              className="btn-h"
                key={item.label}
                href={item.href}
                sx={{ color: "#fff", fontSize: "20px" }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
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
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 10 }}>
        <Toolbar />
        <div className="container">
          <div className="div-title">
            <h1 className="title">
              Hello, I'm Dev.Basel Abo Nada
              <br />
              Front-End Developer (React.js & Next.js)
            </h1>
            <p className="body-t">
              Building responsive, user-friendly applications
              <br />
              with a passion for clean code and modern design.
            </p>
            <Button href="#about" className="btn-t" variant="contained">
              About Me
            </Button>
          </div>
        </div>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
