import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";

export default function SortBy() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("none");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
    dispatch({
      type: "SORT_BY",
      value: event.target.value,
    });
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-simple-select-disabled-label">Sort By</InputLabel>
      <Select
        sx={{ height: "36px" }}
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={value}
        label="SORT BY"
        displayEmpty={true}
        defaultValue={"none"}
        onChange={handleChange}
      >
        <MenuItem value="none">None</MenuItem>
        <MenuItem value={"expensive"}> most expensive</MenuItem>
        <MenuItem value={"cheap"}>The cheapest</MenuItem>
        <MenuItem value={"rate"}>top rated</MenuItem>
      </Select>
    </FormControl>
  );
}
