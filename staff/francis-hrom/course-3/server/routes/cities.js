const express = require("express");

const router = express.Router();
const cityModel = require("../model/cityModel");

/*get all cities*/
router.get("/all", (req, res) => {
  cityModel
    .find({})
    .then((files) => {
      res.send(files);
    })
    .catch((err) => console.log(err));
});

// city route by specific city
router.get("/:name", (req, res) => {
  let cityRequested = req.params.name;
  cityModel
    .findOne({ name: cityRequested })
    .then((city) => {
      res.send(city);
    })
    .catch((err) => console.log(err));
});

router.post("/", (req, res) => {
  const newCity = new cityModel({
    name: req.body.name,
    country: req.body.country,
    img: req.body.img,
  });
  newCity
    .save()
    .then((city) => {
      res.send(city);
    })
    .catch((err) => {
      res.status(500).send("Server error");
    });
});

router.get("/test", (req, res) => {
  res.send({ msg: "Cities test route." });
});

module.exports = router;
