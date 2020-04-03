const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  Email: {
    type: String,
    required: true
  },
  Password: {
    type: String,
    required: true
  },
  name: {
    FirstName: {
      type: String,
      required: true
    },
    LastName: {
      type: String,
      required: true
    }
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"]
  }
});

module.exports = mongoose.model("user", userSchema);
