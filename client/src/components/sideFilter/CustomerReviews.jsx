import React from "react";
import Star from "./Star";
import styles from "./sideFilter.module.css";
import { useDispatch } from "react-redux";

export default function CustomerReviews() {
  const dispatch = useDispatch();

  const handleClick = (val) => {
    console.log(val);
    dispatch({
      type: "CUSTOMER_REVIEWS_FILTER",
      rate: val,
    });
  };

  return (
    <div className={styles.customerReviewsWrap}>
      <h5>CUSTOMER REVIEWS</h5>
      <button
        className={styles.reviewBtns}
        onClick={() => {
          handleClick(1);
        }}
      >
        <Star /> &Up
      </button>
      <button
        className={styles.reviewBtns}
        onClick={() => {
          handleClick(2);
        }}
      >
        <Star /> <Star /> &Up
      </button>
      <button
        className={styles.reviewBtns}
        onClick={() => {
          handleClick(3);
        }}
      >
        <Star /> <Star /> <Star /> &Up
      </button>
      <button
        className={styles.reviewBtns}
        onClick={() => {
          handleClick(4);
        }}
      >
        <Star /> <Star /> <Star /> <Star /> &Up
      </button>
    </div>
  );
}
