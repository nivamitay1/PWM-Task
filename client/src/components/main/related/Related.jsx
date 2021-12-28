import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
export default function Related() {
  const options = [
    "worldwide shipping",
    "under 50$",
    "kitten",
    "plastic plugs",
    "pucker shoes",
    "vintage typewriter",
  ];

  return (
    <Stack direction="row" spacing={1} flexWrap="wrap" marginTop="-10px">
      <Typography
        variant="subtitle1"
        component="p"
        style={{ marginLeft: "16px", marginTop: "10px" }}
      >
        Related
      </Typography>{" "}
      {options.map((option, index) => {
        return (
          <Chip
            key={index}
            label={option}
            style={{ marginLeft: "16px", marginTop: "10px" }}
          />
        );
      })}
    </Stack>
  );
}
