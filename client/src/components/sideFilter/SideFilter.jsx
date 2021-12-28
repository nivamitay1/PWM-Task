import React from "react";
import RangeInput from "./RangeInput";
import CustomerReviews from "./CustomerReviews";
import styles from "./sideFilter.module.css";
import { Grid } from "@mui/material";

export default function SideFilter() {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="end"
        className={styles.filterContainer}
        flexDirection="column"
        spacing={2}
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        <Grid item>
          <RangeInput />
        </Grid>
        <Grid item>
          <CustomerReviews />
        </Grid>
      </Grid>
    </>
  );
}
