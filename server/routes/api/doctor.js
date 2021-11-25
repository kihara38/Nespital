const express = require("express");
const router = express.Router();
const passport = require("passport");
const user = require("../../model/user");

const doctor = require("../../model/doctor");
//@ route get api/doctor
//@desc test user route
//@access public
router.get("/test", (req, res) => res.json({ msg: "user works" }));

//@ route get api/doctor
//@desc test user route
//@access public
router.get("/", async (req, res) => {
  try {
    let doctors = await doctor
      .findOne({ userId: user })
      .populate("user")
      .exec();
    return res.status(200).json({
      success: true,
      data: doctors,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error,
    });
  }

  // doctor.find()
  // .then(doctors=>res.json(doctors))
  // .catch(err=>res.status(400).json(err))
});
router.get("/all", async (req, res) => {
  try {
    let doctors = await doctor.find({}).populate("user").exec();
    return res.status(200).json({
      success: true,
      data: doctors,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error,
    });
  }

  // doctor.find()
  // .then(doctors=>res.json(doctors))
  // .catch(err=>res.status(400).json(err))
});
router.post("/", async (req, res) => {
  const {
    userId: user,
    doctorsId,
    imageUrl,
    specialization,
    approval_status,
  } = req.body;

  try {
    const newDoctor = await doctor.create({
      user,
      doctorsId,
      imageUrl,
      specialization,
      approval_status,
    });

    return res.status(200).json({
      success: true,
      data: newDoctor,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error,
    });
  }
});

//@ route post api/doctor/consultation
//@desc test consultation route
//@access public
router.post("/consultation", async (req, res) => {
  const { disease, consultation } = req.body;

  try {
    const newConsultation = await doctor.create({
      disease,
      consultation,
    });
    return res.status(200).json({
      success: true,
      data: newConsultation,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error,
    });
  }
});

//@ route get api/doctor/experience
//@desc test  route
//@access public
router.post(
  "/experience",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    doctor.findOne({ userId: user }).then((doctor) => {
      const { title, company, location, from, to, current } = req.body;
      const newExp = { title, company, location, from, to, current };

      // Add to exp array
      doctor.experience.unshift(newExp);
      doctor.save().then((doctor) => res.json(doctor));
    });
  }
);
//@ route get api/doctor
//@desc test user route
//@access public
router.get("/", async (req, res) => {
  try {
    let doctors = await doctor.find({}).populate("user").exec();
    return res.status(200).json({
      success: true,
      data: doctors,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error,
    });
  }

  // doctor.find()
  // .then(doctors=>res.json(doctors))
  // .catch(err=>res.status(400).json(err))
});

// router.post("/patient", (req, res) => {
//   const doctorsId = req.body.doctorsId;
//   const specialization = req.body.specialization;
//   const disease = req.body.disease;
//   const Consotation = req.body.Consotation;

//   const patientInfo = new doctor({
//     doctorsId,
//     specialization,
//     disease,
//     Consotation,
//   });
//   patientInfo
//     .save()
//     .then(() => res.json("consotation added"))
//     .catch((err) => res.status(400).json(err));
// });

module.exports = router;
