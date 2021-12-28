import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { domain } from "../../../config";
import Product from "./product/Product";
import { Grid } from "@mui/material";
import styles from "./productList.module.css";
export default function ProductsList() {
  let dispatch = useDispatch();

  const products = useSelector((state) => state.productsListReducer.arr);

  useEffect(() => {
    async function getAllProducts() {
      const res = await axios.get(`${domain}/products`);
      let productsData = await res.data.products;

      dispatch({
        type: "SET_PRODUCTS_ֹֹLIST",
        productsList: productsData,
      });
    }
    getAllProducts();
  }, []);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        id={styles.productListContainer}
        spacing={4}
      >
        {products.map((product) => {
          return (
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
          );
        })}
      </Grid>
    </>
  );
}
