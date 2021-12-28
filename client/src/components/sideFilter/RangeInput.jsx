import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Slider from "@mui/material/Slider";
import styles from "./sideFilter.module.css";

export default function RangeInput() {
  const dispatch = useDispatch();
  const [value, setValue] = useState([0, 200]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch({
      type: "PRICE_RANGE_FILTER",
      range: newValue,
    });
  };

  const marks = [
    {
      value: 0,
      label: "$0",
    },

    {
      value: 200,
      label: "$200",
    },
  ];

  return (
    <div>
      <h5 htmlFor="PriceRange">Price Range Selected</h5>
      <div className={styles.inputBox}>
        <Slider
          getAriaLabel={() => "Price range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={0}
          max={200}
          defaultValue={200}
          style={{ color: "black" }}
          marks={marks}
        />
      </div>
    </div>
  );
}
