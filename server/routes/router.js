const express = require("express");

const router = express.Router();

const productController = require("../controllers/Product.controller");

const orderController = require("../controllers/Order.controller");

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
router.post("/products/order", orderController.addOrder);
//get order data
router.get("/order");

router.get("/", (req, res) => {
  res.json({ message: "Welcome to Shopping Cart" });
});

module.exports = router;
