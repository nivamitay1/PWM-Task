const express = require("express");
const router = express.Router();

// ROUTE HANDLERS
const productController = require("../controller/productsController");

router
  .route("/")
  .post(productController.createProduct)
  .get(productController.getAllProducts);

router
  .route("/watchList")
  .post(productController.addToWatchList)
  .get(productController.getWatchList);
module.exports = router;
