const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const userModel = require("../model/userModel");

router.get("/all", (req, res) => {
  userModel
    .find({})
    .then((files) => {
      res.send(files);
    })
    .catch((err) => console.log(err));
});

router.post("/", (req, res) => {
  userModel.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      res.status(400).json("Email already exists");
    } else {
      const newUser = new userModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;

          newUser
            .save()
            .then((user) => {
              res.send(user);
            })
            .catch((err) => {
              console.log(err);
              res.status(500).send("Server error in da house");
            });
        });
      });
    }
  });
});

router.get("/test", (req, res) => {
  res.send({ msg: "Test route." });
});

module.exports = router;
