import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SideDrawer from "./SideDrawer";

export default function SideNav() {
  const [anchor, setAnchor] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    console.log(event.currentTarget);
    setAnchor(true);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "flex", md: "none" },
        height: "10vh",
      }}
    >
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <SideDrawer anchor={anchor} setAnchor={setAnchor} />
    </Box>
  );
}
