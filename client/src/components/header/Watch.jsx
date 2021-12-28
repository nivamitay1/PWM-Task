import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Watch() {
  return (
    <Button
      variant="outlined"
      style={{ fontWeight: "bolder" }}
      component={Link}
      to={"/watchList"}
    >
      Watch
    </Button>
  );
}
