const { validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const User = require("../models/User.model");

exports.signup = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new Error("Validation failed");
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }

  const { email, firstname, lastname, password } = req.body;
  bcrypt
    .hash(password, 12)
    .then((hashedPw) => {
      const user = new User({
        email: email,
        password: hashedPw,
        firstname: firstname,
        lastname: lastname,
      });
      return user.save();
    })
    .then((result) => {
      res.status(201).json({ message: "User created" });
    })
    .catch((err) => {
      res.status(422).json(err);
    });
};

exports.login = (req, res, next) => {
  const { email, password } = req.body;
  let loadedUser;
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        const error = new Error("User with email not found");
        error.statusCode = 401;
        throw error;
      }
      loadedUser = user;
      return bcrypt.compare(password, user.password);
    })
    .then((isEqual) => {
      if (!isEqual) {
        const error = new Error("Wrong Password");
        error.statusCode = 401;
        throw error;
      }
      // const token = jwt.sign(
      //   {
      //     email: loadedUser.email,
      //     userId: loadedUser._id.toString(),
      //   },
      //   "secret",
      //   { expiresIn: "1d" }
      // );
      res.status(200).json({
        // token: token,
        userId: loadedUser._id.toString(),
        role: loadedUser.role,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
