import React from "react";
import { Stack } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SortBy from "./SortBy";

export default function Sort() {
  return (
    <Stack direction="row" spacing={1} height="36px" mb={2} alignItems="center">
      <SortBy />

      <FormControl sx={{ m: 1, minWidth: 120 }} size="small" disabled>
        <InputLabel id="demo-simple-select-disabled-label">
          Condition
        </InputLabel>
        <Select
          labelId="demo-simple-select-disabled-label"
          sx={{ height: "36px" }}
          id="demo-simple-select-disabled"
          value={""}
          label="condition"
        ></Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 152 }} size="small" disabled>
        <InputLabel id="demo-simple-select-disabled-label">
          Delivery Options
        </InputLabel>
        <Select
          sx={{ height: "36px" }}
          labelId="demo-simple-select-disabled-label"
          id="demo-simple-select-disabled"
          value={""}
          label="delivery options"
        ></Select>
      </FormControl>
    </Stack>
  );
}
