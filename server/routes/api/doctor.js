const express = require("express");
const router = express.Router();
const user = require("../../model/user");

const doctor = require("../../model/doctor");
//@ route get api/doctor
//@desc test user route
//@access public
router.get("/test", (req, res) => res.json({ msg: "user works" }));

router.post("/", async (req, res) => {
  const {
    userId: user,
    doctorsId,
    specialization,
    experience,
    education,
    google,
    facebook,
    twitter,
    linkedin,
    instagram,
    approval_status,
  } = req.body;

  try {
    const newDoctor = await doctor.create({
      user,
      doctorsId,
      specialization,
      experience,
      education,
      social: {
        google,
        facebook,
        twitter,
        linkedin,
        instagram,
      },
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

router.post("/patient", (req, res) => {
  const doctorsId = req.body.doctorsId;
  const specialization = req.body.specialization;
  const disease = req.body.disease;
  const Consotation = req.body.Consotation;

  const patientInfo = new doctor({
    doctorsId,
    specialization,
    disease,
    Consotation,
  });
  patientInfo
    .save()
    .then(() => res.json("consotation added"))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
