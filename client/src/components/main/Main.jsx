import React from "react";
import { Switch, Route } from "react-router-dom";
import ProductsList from "./products/ProductsList";
import Related from "./related/Related";
import WatchList from "./watchList/WatchList";
import { Grid } from "@mui/material";
import styles from "./main.module.css";
import Sort from "./sort/Sort";
export default function Main() {
  return (
    <main>
      <Grid
        container
        direction="column"
        sx={{
          width: { xs: "100vw", md: "67vw" },
          marginRight: { xs: 0, md: "10vw" },
        }}
        className={styles.mainContainer}
      >
        <Sort />
        <Related />
        <>
          <Switch>
            <Route exact path="/" component={ProductsList} />
            <Route exact path="/watchList" component={WatchList} />
          </Switch>
        </>
      </Grid>
    </main>
  );
}
