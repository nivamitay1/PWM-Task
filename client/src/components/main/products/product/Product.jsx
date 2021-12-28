import React from "react";
import styles from "./product.module.css";
import Typography from "@mui/material/Typography";
import Stars from "./Stars";
import WatchBtn from "./WatchBtn";

export default function Product({ product }) {
  return (
    <div className={styles.product}>
      <img src={`/assets/${product.img}`} alt="Product" />
      <Typography variant="body1" component="p" className={styles.productName}>
        {product.name}
      </Typography>
      <div className={styles.productPrice}>${product.price}</div>
      <Typography
        variant="body2"
        component="p"
        className={styles.productDescription}
      >
        {product.description}
      </Typography>
      <div>
        <span>
          <Stars />{" "}
        </span>
        <Typography variant="subtitle2" component="span">
          {"  " + product.rate}
        </Typography>
        <span>
          {" "}
          <WatchBtn product={product} />
        </span>
      </div>
    </div>
  );
}
