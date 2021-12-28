const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = require("./index");
const port = process.env.PORT || 3000;
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB, (err) => {
  if (err) throw err;
  console.log("db connection successful");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("App is running on port " + port);
});
