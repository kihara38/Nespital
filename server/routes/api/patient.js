const express = require("express");
const patient = require("../../model/patient");
const router = express.Router();
const user = require("../../model/user");
//@ route get api/patient/test
//@desc test user route
//@access public
router.get("/test", (req, res) => res.json({ msg: "patient works" }));

//@ route post api/patient
//@desc post patient route
//@access public
router.post("/", async (req, res) => {
  const { userId: user, HPN, BIO, personaladdress, emergencyperson } = req.body;
  try {
    const newPatient = await patient.create({
      user,
      HPN,
      BIO,
      personaladdress,
      emergencyperson,
    });
    return res.status(200).json({
      success: true,
      data: newPatient,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error,
    });
  }
});

//@ route get api/patient
//@desc get patient route
//@access public
router.get("/", async (req, res) => {
  try {
    let patients = await patient.find({}).populate("user").exec();
    return res.status(200).json({
      success: true,
      data: patients,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error,
    });
  }
});

module.exports = router;
