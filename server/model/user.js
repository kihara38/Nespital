const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create user schema
const User = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["admin", "doctor", "patient"],
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("user", User);
