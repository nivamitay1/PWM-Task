import React from "react";
import SearchBar from "./SearchBar";
import Watch from "./Watch";
import MyCartBtn from "./MyCartBtn";
import UserAvatar from "./UserAvatar";
import styles from "./header.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Logo from "./Logo";
import { Stack } from "@mui/material";
import SideNav from "../sideFilter/sidenav/SideNav";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        id={styles.navbar}
      >
        <Stack direction="row" spacing={1}>
          <SideNav />
          <Logo />
        </Stack>

        <SearchBar />
        <Stack
          direction="row"
          spacing={{ sm: 0, md: 2 }}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Watch />
          <MyCartBtn />
          <UserAvatar />
        </Stack>
      </AppBar>
    </Box>
  );
}
