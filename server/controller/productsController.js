const Product = require("../model/productModel");
const watchList = [];
exports.createProduct = async (req, res) => {
  try {
    console.log("products");
    const data = req.body;
    const newProduct = await Product.create(data);
    res.status(201).json({
      status: "success",
      newProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: "success",
      results: products.length,
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.getWatchList = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      status: "success",
      results: watchList.length,
      products,
      watchList,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.addToWatchList = (req, res) => {
  try {
    const newProduct = req.body.productID;
    const index = watchList.findIndex((product) => product === newProduct);
    if (index > -1) {
      watchList.splice(index, 1);
    } else {
      watchList.push(newProduct);
    }

    res.status(200).json({
      status: "success",
      results: watchList.length,
      watchList,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
