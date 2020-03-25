const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const router = require("./routes/router");
// const router = require("./routes/router");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,Accept,Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,GET,POST,PATCH,DELETE");
    return res.status(200).json({});
  }
  next();
});
// app.get("/", (req, res) => {
//   res.json({ message: "welcoome to shopping cart" });
// });
app.listen(4000, () => {
  console.log("Running on port 4000");
});
const db = require("./dbConfig");
mongoose
  .connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected to database");
  })
  .catch(err => {
    console.log("can't connect to database", err);
    process.exit;
  });
app.use("/", router);
