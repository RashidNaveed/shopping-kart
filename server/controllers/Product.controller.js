const product = require("../models/Product.model");

// adding products
exports.addProduct = (req, res, next) => {
  const {
    title,
    size,
    price,
    images,
    rating,
    tags,
    color,
    description,
  } = req.body;
  const newProduct = new product({
    title,
    size,
    price,
    images,
    rating,
    tags,
    color,
    description,
  });
  newProduct
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Something went wrong while creating product",
      });
    });
  console.log(req);
};

// getting all products
exports.getAllProducts = (req, res) => {
  product.find({}, (err, result) => {
    err ? res.status(500).send(err) : res.json(result);
  });
};

// getting single product
exports.getSingleProduct = (req, res) => {
  const { id } = req.params;
  console.log("Id is", id);
  product
    .findById(id)
    .then((result) => {
      if (!result) {
        return res.status(404).send({
          message: "Product not found",
        });
      }
      res.send(result);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Product not found by id" + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Product not found by id" + req.params.id,
      });
    });
};

//geting a single product by tag
exports.getTagProduct = (req, res) => {
  console.log("Tag is", req.params.tags);
  product.find({ tags: req.params.tags }, (err, result) => {
    // err ? res.status(500).send(err) : res.json(result);
    if (err) {
      res.status(200).send(err);
    } else {
      if (result.length === 0) {
        res.status(200).json({
          message: "Product not found by category " + req.params.tags,
        });
      } else return res.json(result);
    }
  });
};

//updating product
exports.updateProduct = (req, res) => {
  const { id } = req.params;
  const { title, price, color, size, tags, images, description } = req.body;
  product
    .findById(
      id,
      (err, product) => {
        if (err) return handleError(err);

        product.set({ title, price, color, size, tags, images, description });
        product.save((err) => {
          if (err) {
            console.log(err);
          }
        });
      },
      console.log("id in params", id),
      console.log("Data in params", req.body)
    )
    .then((result) => {
      if (!result) {
        return res.status(404).send({
          message: "Product not found",
        });
      }
      res.send(result);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Product not found by id" + id,
        });
      }
      return res.status(500).send({
        message: "Product not found by id" + id,
      });
    });
};

//deleting product
exports.deleteProduct = (req, res) => {
  const { id } = req.params;
  product
    .findByIdAndRemove(id, (err, model) => {
      if (err) return handleError(err);
      res.send("item: " + id + " deleted");
    })
    .then((result) => {
      if (!result) {
        return res.status(404).send({
          message: "Product not found with id " + id,
        });
      }
      res.send({ message: "Product deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Product not found with id " + id,
        });
      }
      return res.status(500).send({
        message: "Could not delete product with id " + req.params.id,
      });
    });
  console.log("recived id is", id);
};
