const express = require("express");
const router = express.Router();
const passport = require("passport");

const patient = require("../../model/patient");
const user = require("../../model/user");
//@ route get api/patient/test
//@desc test user route
//@access public
router.get("/test", (req, res) => res.json({ msg: "patient works" }));

//@ route get api/patient
//@desc get patient route
//@access public
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const errors = {};
    try {
      let patients = await patient
        .findOne({ userId: user })
        .populate("user", ["name", "role"])
        .exec();
      return res.status(200).json({
        success: true,
        data: patients,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: errors,
      });
    }
  }
);

//@ route post api/patient
//@desc post patient route
//@access public
router.post("/", async (req, res) => {
  const {
    userId: user,
    HPN,
    BIO,
    personaladdress,
    emergencyperson,
    account_status,
  } = req.body;
  try {
    const newPatient = await patient.create({
      user,
      HPN,
      BIO,
      personaladdress,
      emergencyperson,
      account_status,
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

module.exports = router;
