const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Appointment = new Schema(
  {
    patientHPN: {
      type: String,
      required: true,
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "doctor",
      required: true,
    },
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
