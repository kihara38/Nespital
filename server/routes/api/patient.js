const express = require("express");
const router = express.Router();
const passport = require("passport");
const shortid = require("shortid");
const multer = require("multer");
const path = require("path");
const Appointment = require("../../model/appointment");
const patient = require("../../model/patient");
const user = require("../../model/user");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + shortid.generate() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

//@ route get api/patient/test
//@desc test user route
//@access public
router.get("/test", (req, res) => res.json({ msg: "patient works" }));
//@ route get api/patient/all
//@desc get patient route
//@access public
router.get(
  "/all",
  // passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const errors = {};
    try {
      let patients = await patient.find({}).populate("user").exec();
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

//@ route get api/patient/id
//@desc get patient route
//@access public
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const errors = {};
    try {
      let patients = await patient
        .findOne({ user: req.params.id })
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
router.get(
  "/appointments/:userId",
  // passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const errors = {};
    try {
      const current_patient = await patient
        .findOne({ userId: req.params.userId })
        .populate()
        .exec();
      console.log(current_patient);
      const appointments = await Appointment.find({
        patientHPN: current_patient.HPN,
      });
      console.log(appointments);

      return res.status(200).json({
        success: true,
        data: appointments,
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
router.post("/", upload.single("patient-image"), async (req, res) => {
  const avatar = `http://localhost:5002/uploads/${req.file.filename}`;
  const { user, HPN, account_status } = req.body;
  const { contact, county, district, location } = req.body;
  const { DoB, Weight, Height, Sex } = req.body;
  const newPAdd = { contact, county, district, location };
  const { name, relationship, county1, location1, contact1 } = req.body;
  const newEme = { name, relationship, county1, location1, contact1 };
  const bio = { DoB, Weight, Height, Sex };

  try {
    const newPatient = await patient.create({
      avatar,
      user,
      HPN: shortid.generate(),
      account_status,
      avatar,
    });
    newPatient.BIO.unshift(bio);
    newPatient.personaladdress.unshift(newPAdd);
    newPatient.emergencyperson.unshift(newEme);

    newPatient.save().then((patient) =>
      res.status(200).json({
        success: true,
        data: patient,
      })
    );
    // return res.status(200).json({
    //   success: true,
    //   data: newPatient,
    // });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error,
    });
  }
});

// @route   DELETE api/patient
// @desc    Delete user and patient
// @access  Private

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const errors = {};
    try {
      let patients = await patient.findOneAndRemove({ userId: user });
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

module.exports = router;
