const express = require("express");
const router = express.Router();
const passport = require("passport");
const user = require("../../model/user");
const multer = require("multer");
const path = require("path");

const doctor = require("../../model/doctor");
const Appointment = require("../../model/appointment");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });
//@ route get api/doctor
//@desc test user route
//@access public
router.get("/test", (req, res) => res.json({ msg: "user works" }));
//@ route get api/doctor/all
//@desc test doctor route
//@access public
router.get(
  "/all",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
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
  }
);

//@ route get api/doctor/id
//@desc test user route
//@access public
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const errors = {};

    try {
      let doctors = await doctor
        .findOne({ user: req.params.id })
        .populate("user", ["name", "role"])
        .exec();
      console.log(doctors);
      return res.status(200).json({
        success: true,
        data: doctors,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: errors,
      });
    }

    // doctor.find()
    // .then(doctors=>res.json(doctors))
    // .catch(err=>res.status(400).json(err))
  }
);
//@ route post api/doctor
//@desc post doctor route
//@access public
router.post("/", upload.single("doctorimage"), (req, res) => {
  doctor.findOne({ userId: user }).then((doctor) => {
    const avatar = `http://localhost:5002/uploads/${req.file.filename}`;
    const { userId: user, doctorsId, specialization } = req.body;
    const { title, company, location, from, to, current } = req.body;
    const newExp = { title, company, location, from, to, current };
    const { school, degree, fieldofstudy, from1, to1, current1 } = req.body;
    const newEdu = { school, degree, fieldofstudy, from1, to1, current1 };
    try {
      const newDoctor = doctor.create({
        user,
        avatar,
        doctorsId,
        specialization,
      });
      newDoctor.experience.unshift(newExp);
      newDoctor.education.unshift(newEdu);
      newDoctor.save().then((doctor) =>
        res.status(200).json({
          success: true,
          data: doctor,
        })
      );
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error,
      });
    }
  });
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

//@ route get api/doctor/appointments/:doctorId
//@desc test user route
//@access public
router.get(
  "/appointments/:userId",
  // passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const errors = {};
    try {
      let doc = await doctor.findOne({ user: req.params.userId });

      let appointments = await Appointment.find({
        doctor: doc.id,
      });

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

module.exports = router;
