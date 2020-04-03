const order = require("../models/Order.model");

exports.addOrder = (req, res) => {
  const { customerInfo, customerOrder, totalDelivery, totalAmount } = req.body;
  const newOrder = new order({
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
};

exports.getOrder = (req, res) => {
  order.find((err, result) => {
    err ? res.status(500).send(err) : res.json(result);
  });
};
