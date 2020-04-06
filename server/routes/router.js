const express = require("express");

const router = express.Router();

const { body } = require("express-validator");

const productController = require("../controllers/Product.controller");

const orderController = require("../controllers/Order.controller");

const authController = require("../controllers/Auth.controller");

const User = require("../models/User.model");

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

//singup user
router.put(
  "/signup",
  [
    body("email")
      .isEmail()
      .withMessage("Please enter a valid email")
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then((user) => {
          if (user) {
            return Promise.reject("E-Mail address already exisits");
          }
        });
      })
      .normalizeEmail(),
    body("password")
      .trim()
      .isLength({ min: 6 })
      .withMessage("Password must be of 6 length"),
    body("firstname")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Please enter your firstname"),
    body("lastname")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Please enter your lastname"),
  ],
  authController.signup
);

//Login user
router.post("/login",[], authController.login);

router.get("/", (req, res) => {
  res.json({ message: "Welcome to Shopping Cart" });
});

module.exports = router;
