const express = require("express");
const router = express.Router();
const user = require("../../model/user");

const Appointment = require("../../model/appointment");
const patient = require("../../model/patient");

//@ route get api/appointment/test
//@desc test appointment/test
//@access public
router.get("/test", (req, res) => res.json({ msg: "booking works" }));

//@ route post api/appointment
//@desc test appointment
//@access public
router.post("/", async (req, res) => {
  const { userId: user, approval_status, date, doctor } = req.body;
  const appointmentDate = date.split("T")[0];
  const time = date.split("T")[1];
  try {
    // get the patient hpn using userId
    let pat = await patient.findOne({ user });

    const appointment = {
      patientHPN: pat.HPN,
      doctor,
      approval_status,
      date: appointmentDate,
      time,
    };

    const newBooking = await Appointment.create(appointment);
    return res.status(200).json({
      success: true,
      data: newBooking,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error,
    });
  }
});

router.post("/update-status", async (req, res) => {
  // get the body params
  const { appointmentId, status } = req.body;
  // fetch appointment then update
  try {
    let updatedAppointment = await Appointment.findByIdAndUpdate(
      appointmentId,
      {
        approval_status: status,
      },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      data: updatedAppointment,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error });
  }
});

module.exports = router;
