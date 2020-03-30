const express = require("express");

const router = express.Router();

const order = require("../models/Order.model");

const productController = require("../controllers/Product.controller");

// adding products
router.post("/products/add", productController.addProduct);

// getting all products
router.get("/products", productController.getAllProducts);

// getting single product
router.get("/products/:id", productController.getSingleProduct);

// getting product by category
router.get("/category/:tags", productController.getTagProduct);

// updating product
router.put("/products/edit/:id", productController.updateProduct);

//deleting product
router.delete("/products/delete/:id", productController.deleteProduct);
//Posting new order
router.post("/products/order", (req, res) => {
  const {
    refrenceId,
    customerInfo,
    customerOrder,
    totalDelivery,
    totalAmount
  } = req.body;
  const newOrder = new order({
    refrenceId,
    customerInfo,
    customerOrder,
    totalDelivery,
    totalAmount
  });
  newOrder
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Something went wrong while making order"
      });
    });
  console.log(req);
});
//get order data
router.get("/order", (req, res) => {
  order.find((err, result) => {
    err ? res.status(500).send(err) : res.json(result);
  });
});

router.get("/", (req, res) => {
  res.json({ message: "Welcome to Shopping Cart" });
});

module.exports = router;
