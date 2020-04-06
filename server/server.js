const path = require("path");
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
  .catch((err) => {
    console.log("can't connect to database", err);
    process.exit;
  });
mongoose.set("useFindAndModify", false);
app.use(express.static(path.join(__dirname, "public")));
app.use("/", router);
app.use((error, req, res, next) => {
  console.log("thrown error", error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  console.log("thrown status code", status);
  console.log("thrown message", message);
  console.log("thrown data", data);
  return res.status(status).json({ message: message, data: data });
});
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "public", "pageNotFound.html"));
});
