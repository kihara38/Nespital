const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const User = require("../../model/user");
const keys = require("../../config/keys");
const ValidateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

//@ route get api/user/test
//@desc test user route
//@access public
router.get("/test", (req, res) => res.json({ msg: "user works" }));

//@ route get api/user
//@desc test user route
//@access public
router.get("/", (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(err));
});

//@ route get api/user/register
//@desc test user route
//@access public
router.post("/", (req, res) => {
  const { errors, isValid } = ValidateRegisterInput(req.body);
  //check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({
        success: false,
        email: "Email already exists",
      });
    }
  });
  const { name, email, password, role } = req.body;
  const newUser = new User({
    name,
    email,
    password,
    role,
  });
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser
        .save()
        .then(() =>
          res.json({
            success: true,
            data: newUser,
          })
        )
        .catch((err) => res.status(400).json(err));
    });
  });
});
//@ route get api/user/login
//@desc test user route
//@access public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  //check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { email, password } = req.body;

  //find user by email
  User.findOne({ email }).then((user) => {
    //check for user
    if (!user) {
      return res.status(404).json({
        success: false,
        email: "user not found",
      });
    }
    //check password
    bcrypt.compare(password, user.password).then((ismatch) => {
      if (ismatch) {
        const payload = { id: user.id, name: user.name, role: user.role };
        //sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token,
            });
          }
        );
      } else {
        return res.status(400).json({
          success: false,
          password: "password incorrect",
        });
      }
    });
  });
});

//@ route get api/user/:id
//@desc test user route
//@access public
router.get("/get-by-id/:id", (req, res) => {
  User.findById(req.params.id)
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(err));
});
//@route   get api/user/current
//@desc    return current user
//@access  private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);

module.exports = router;
