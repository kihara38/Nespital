const express = require("express");
const router = express.Router();

const user = require("../../model/user");

//@ route get api/user/test
//@desc test user route
//@access public
router.get("/test", (req, res) => res.json({ msg: "user works" }));

//@ route get api/user
//@desc test user route
//@access public
router.get("/", (req, res) => {
  user
    .find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(err));
});

//@ route get api/user/register
//@desc test user route
//@access public
router.post("/register", (req, res) => {
  const { name, email, password, role } = req.body;
  const newUser = new user({
    name,
    email,
    password,
    role,
  });
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
//@ route get api/user/:id
//@desc test user route
//@access public
router.get("/:id", (req, res) => {
  user
    .findById(req.params.id)
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
