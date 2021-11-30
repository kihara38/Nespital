const express = require("express");
const router = express.Router();
const user = require("../../model/user");

const Appointment = require("../../model/appointment");

//@ route get api/appointment/test
//@desc test appointment/test
//@access public
router.get("/test", (req, res) => res.json({ msg: "booking works" }));

//@ route post api/appointment
//@desc test appointment
//@access public
router.post("/", async (req, res) => {
  const { userId: user, approval_status, date, time } = req.body;
  try {
    console.log(req.body);
    const newBooking = await Appointment.create({
      user,
      approval_status,
      date,
      time,
    });
    return res.status(200).json({
      success: true,
      data: newBooking,
    });
    console.log(req.body);
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error,
    });
  }
});

module.exports = router;
