const express = require("express");
const router = express.Router();
const passport = require("passport");
const user = require("../../model/user");
const multer = require("multer");
const path = require("path");

const doctor = require("../../model/doctor");

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
router.post("/", upload.single("patient-image"), async (req, res) => {
  const avatar = `http://localhost:5002/uploads/${req.file.filename}`;
  const { userId: user, doctorsId, specialization } = req.body;
  const { title, company, location, from, to, current } = req.body;
  const newExp = { title, company, location, from, to, current };
  const { school, degree, fieldofstudy, from1, to1, current1 } = req.body;
  const newEdu = { school, degree, fieldofstudy, from, to, current };
  try {
    const newDoctor = await doctor.create({
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
    return res.status(400).json(console.log(error));
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

//@ route get post/doctor/experience
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
//@ route get post/doctor/education
//@desc test  route
//@access public
router.post(
  "/education",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    doctor.findOne({ userId: user }).then((doctor) => {
      const { school, degree, fieldofstudy, from, to, current } = req.body;
      const newEdu = { school, degree, fieldofstudy, from, to, current };

      // Add to exp array
      doctor.education.unshift(newEdu);
      doctor.save().then((doctor) => res.json(doctor));
    });
  }
);

// @route   DELETE api/doctor/experience/:exp_id
// @desc    Delete experience from doctor
// @access  Private
router.delete(
  "/experience/:exp_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    doctor
      .findOne({ userId: user })
      .then((doctor) => {
        // Get remove index
        const removeIndex = doctor.experience
          .map((item) => item.id)
          .indexOf(req.params.exp_id);

        // Splice out of array
        doctor.experience.splice(removeIndex, 1);

        // Save
        doctor.save().then((doctor) => res.json(doctor));
      })
      .catch((err) => res.status(404).json(err));
  }
);

// @route   DELETE api/doctor/education/:edu_id
// @desc    Delete education from doctor
// @access  Private
router.delete(
  "/education/:edu_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    doctor
      .findOne({ userId: user })
      .then((doctor) => {
        // Get remove index
        const removeIndex = doctor.education
          .map((item) => item.id)
          .indexOf(req.params.edu_id);

        // Splice out of array
        doctor.education.splice(removeIndex, 1);

        // Save
        doctor.save().then((doctor) => res.json(doctor));
      })
      .catch((err) => res.status(404).json(err));
  }
);

// @route   DELETE api/doctor
// @desc    Delete user and doctor
// @access  Private
router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    doctor.findOneAndRemove({ userId: user }).then(() => {
      user
        .findOneAndRemove({ _id: user })
        .then(() => res.json({ success: true }));
    });
  }
);

module.exports = router;
