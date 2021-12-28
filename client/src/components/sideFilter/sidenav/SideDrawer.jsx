import React from "react";
import RangeInput from "../RangeInput";
import CustomerReviews from "../CustomerReviews";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";

export default function SideDrawer({ anchor, setAnchor }) {
  const handleClose = () => {
    setAnchor(false);
  };

  return (
    <Drawer
      anchor={"left"}
      open={anchor}
      onClose={() => {
        setAnchor(false);
      }}
      style={{ width: "70vw" }}
    >
      <List style={{ width: "85vw" }}>
        <ListItem button onClick={handleClose}>
          <ListItemIcon>
            <CloseIcon />
          </ListItemIcon>
        </ListItem>

        <Divider />

        <ListItem
          button
          component={Link}
          to={"/watchList"}
          onClick={handleClose}
        >
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText primary={"Watch List"} />
        </ListItem>

        <Divider />

        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary={"My Cart (5)"} />
        </ListItem>

        <Divider />

        <ListItem>
          <RangeInput />
        </ListItem>
        <ListItem>
          <CustomerReviews />
        </ListItem>
      </List>
    </Drawer>
  );
}
