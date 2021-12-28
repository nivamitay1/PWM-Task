import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { domain } from "../../../config";
import Product from "../products/product/Product";
import { Grid } from "@mui/material";
import styles from "../products/productList.module.css";

export default function WatchList() {
  let dispatch = useDispatch();
  const watchList = useSelector((state) => state.watchListReducer);
  const products = useSelector((state) => state.productsListReducer.arr);

  useEffect(() => {
    async function getWatchList() {
      const res = await axios.get(`${domain}/products/watchList`);

      dispatch({
        type: "SET_WATCH_ֹֹLIST",
        watchList: res.data.watchList,
      });

      dispatch({
        type: "SET_PRODUCTS_ֹֹLIST",
        productsList: res.data.products,
      });
    }
    getWatchList();
  }, []);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      id={styles.productListContainer}
      spacing={4}
    >
      {products.map((product) => {
        console.log({ products, watchList });
        return (
          <>
            {watchList.includes(product._id) ? (
              <Grid
                item
                xl={3}
                lg={4}
                md={6}
                sm={12}
                xs={12}
                key={product._id}
                className={styles.productGrid}
              >
                <Product product={product} />
              </Grid>
            ) : null}
          </>
        );
      })}
    </Grid>
  );
}
