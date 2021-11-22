const express = require("express");
const router = express.Router();
const passport = require("passport");
const shortid = require("shortid");
const multer = require("multer");
const path = require("path");

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
router.post("/", upload.single("doctor-image"), async (req, res) => {
  console.log(req.body);
  const avatar = `http://localhost:5002/uploads/${req.file.filename}`;
  console.log(avatar);

  res.status(200).json("hbjnkmlbhjnk");
  const {
    userId: user,
    HPN: shortid,
    BIO: [sex, Height, Weight, DoB],
    personaladdress: [contact, county, district, location],
    emergencyperson: [name, relationship, county1, location1, contact1],
    account_status,
  } = req.body;
  try {
    const newPatient = await patient.create({
      user,
      HPN: shortid.generate(),
      BIO: [sex, Height, Weight, DoB],
      personaladdress: [contact, county, district, location],
      emergencyperson: [name, relationship, county1, location1, contact1],
      account_status,
      avatar,
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
