import React from "react";
import axios from "axios";
import { domain } from "../../../../config";
import { Button } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
export default function WatchBtn({ product }) {
  const addToWatchList = async () => {
    const res = await axios.post(`${domain}/products/watchList`, {
      productID: product._id,
    });
    const data = await res.data;
  };

  return (
    <Button
      variant="outlined"
      style={{
        textTransform: "none",
        float: "right",
        height: "32px",
        width: "88px",
      }}
      startIcon={<FavoriteBorderOutlinedIcon fontSize="small" />}
      onClick={addToWatchList}
    >
      Watch
    </Button>
  );
}
