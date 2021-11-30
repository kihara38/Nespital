const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Appointment = new Schema(
  {
    approval_status: {
      type: String,
      enum: ["Pending", "Declined", "Approved"],
      default: "Pending",
    },
    date: { type: String },
    time: { type: String },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Appointment", Appointment);
