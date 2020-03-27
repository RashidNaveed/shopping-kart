const express = require("express");
const router = express.Router();
const order = require("../models/Order.model");
const product = require("../models/Product.model");

// adding products
router.post("/products/add", (req, res) => {
  const {
    title,
    size,
    price,
    images,
    rating,
    tags,
    color,
    description
  } = req.body;
  const newProduct = new product({
    title,
    size,
    price,
    images,
    rating,
    tags,
    color,
    description
  });
  newProduct
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Something went wrong while creating movie-card"
      });
    });
  console.log(req);
});

// getting all products
router.get("/products", (req, res) => {
  product.find({}, (err, result) => {
    err ? res.status(500).send(err) : res.json(result);
  });
});

// getting single product
router.get("/products/:id", (req, res) => {
  product
    .findById(req.params.id)
    .then(result => {
      if (!result) {
        return res.status(404).send({
          message: "Product not found"
        });
      }
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Product not found by id" + req.params.id
        });
      }
      return res.status(500).send({
        message: "Product not found by id" + req.params.id
      });
    });
});

// updating product
router.put("/products/edit/:id", (req, res) => {
  const { id } = req.params;
  const { title, price, color, size, tags, images, description } = req.body;
  product
    .findById(
      id,
      (err, model) => {
        if (err) return handleError(err);

        model.set({ title, price, color, size, tags, images, description });
        model.save(err => {
          if (err) {
            console.log(err);
          }
        });
      },
      console.log("id in params", id),
      console.log("Data in params", req.body)
    )
    .then(result => {
      if (!result) {
        return res.status(404).send({
          message: "Product not found"
        });
      }
      res.send(result);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Product not found by id" + id
        });
      }
      return res.status(500).send({
        message: "Product not found by id" + id
      });
    });
});
//deleting product
router.delete("/products/delete/:id", (req, res) => {
  const { id } = req.params;
  product
    .findByIdAndRemove(id, (err, model) => {
      if (err) return handleError(err);
      res.send("item: " + id + " deleted");
    })
    .then(result => {
      if (!result) {
        return res.status(404).send({
          message: "Product not found with id " + id
        });
      }
      res.send({ message: "Product deleted successfully!" });
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Product not found with id " + id
        });
      }
      return res.status(500).send({
        message: "Could not delete product with id " + req.params.id
      });
    });
  console.log("recived id is", id);
});
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
