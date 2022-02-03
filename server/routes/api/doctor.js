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
  user.findById(req.body.userId).then((user) => {
    const avatar = `http://localhost:5002/uploads/${req.file.filename}`;
    const { doctorsId, specialization } = req.body;
    const { title, company, location, from, to, current } = req.body;
    const newExp = { title, company, location, from, to, current };
    const { school, degree, fieldofstudy, from1, to1, current1 } = req.body;
    const newEdu = { school, degree, fieldofstudy, from1, to1, current1 };
    try {
      //restrict same user id == doctors.findOne({user: user._id})

      const newDoctor = doctor
        .create({
          user: user._id,
          avatar,
          doctorsId,
          specialization,
          experience: newExp,
          education: newEdu,
        })
        .then(() => {
          return res.status(200).json({
            success: true,
            data: newDoctor,
          });
        })
        .catch((error) => {
          return res.status(400).json({
            success: false,
            message: error,
          });
        });
    } catch (error) {
      console.log({ didntPass: error });

      return res.status(400).json({
        success: false,
        message: error,
      });
    }
  });
});

//@ route get api/doctor/consultation
//@desc test consultation route
//@access public

//@ route post api/doctor/consultation
//@desc test consultation route
//@access public
router.post(
  "/consultation",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    console.log(req.body);
    doctor.findOne({ userId: user }).then((doctor) => {
      const { disease, description, patient } = req.body;
      const consultation = { disease, description, patient };

      try {
        doctor.consultation.unshift(consultation);

        doctor.save().then((doctor) =>
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
  }
);

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
// @route   DELETE api/patient
// @desc    Delete user and patient
// @access  Private
router.delete(
  "/appointments/:userId",
  // passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const errors = {};
    try {
      let doc = await doctor.find({ user: req.params.userId });

      let appointments = await Appointment.findOneAndRemove({
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
// @route   DELETE api/patient
// @desc    Delete user and patient
// @access  Private

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const errors = {};
    try {
      let dooctors = await doctor.findOneAndRemove({ userId: user });
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
  }
);

module.exports = router;
