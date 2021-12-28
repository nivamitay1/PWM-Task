// IMPORT PACKAGES
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

// IMPORT ROUTERS
const productRouter = require("./routes/productsRoutes");

// MIDDLEWARE
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
app.use(morgan("dev"));

// ROUTERS
app.use("/api/v1/products", productRouter);

app.use(express.static("public/build"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/build", "index.html"));
});

// EXPORT APP
module.exports = app;
