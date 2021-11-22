const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Patient = new Schema(
  {
    HPN: { type: String },

    BIO: [
      {
        Sex: { type: String },
        Height: { type: Number },
        Weight: { type: Number },
        DoB: { type: String },
      },
    ],
    personaladdress: [
      {
        contact: { type: Number },
        county: { type: String },
        district: { type: String },
        location: { type: String },
      },
    ],
    emergencyperson: [
      {
        name: { type: String },
        relationship: { type: String },
        county1: { type: String },
        location1: { type: String },
        contact1: { type: Number },
      },
    ],
    account_status: {
      type: String,
      enum: ["BOOKED", "CANCELLED"],
      default: "BOOKED",
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    avatar: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Patient", Patient);
