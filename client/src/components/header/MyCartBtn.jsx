import React from "react";
import styles from "./header.module.css";
import { Button, Badge } from "@mui/material";

export default function MyCartBtn() {
  return (
    <Badge badgeContent={5} color="error">
      <Button variant="text" id={styles.myCartBtn}>
        My cart
      </Button>
    </Badge>
  );
}
