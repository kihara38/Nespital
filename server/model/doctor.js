const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Doctor = new Schema({
  doctorsId: { type: String },
  specialization: { type: String },
  disease: { type: String },
  Consotation: { type: String },
  imageUrl: { type: String, unique: true },
  experience: [
    {
      title: { type: String, required: true },
      company: { type: String, required: true },
      location: { type: String },
      from: { type: String, required: true },
      to: { type: String },
      current: { type: Boolean, default: true },
    },
  ],
  education: [
    {
      school: { type: String, required: true },
      degree: { type: String, required: true },
      fieldofstudy: { type: String },
      from: { type: String, required: true },
      to: { type: String },
      current: { type: Boolean, default: true },
    },
  ],
  social: {
    google: {
      type: String,
    },
    facebook: {
      type: String,
    },
    twitter: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    instagram: {
      type: String,
    },
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});
module.exports = mongoose.model("Doctor", Doctor);
