const express = require("express");

const router = express.Router();
const cityModel = require("../model/cityModel");

/*get all cities*/
router.get("/all", (req, res) => {
  // logic/retrieveAllCities.js (.spec.js)
  cityModel
    .find({})
    .then((files) => {
      res.send(files);
    })
    .catch((err) => console.log(err));
});

// city route by specific city
router.get("/:name", (req, res) => {
  // logic/retrieveCityByName.js (.spec.js)
  /*
  const { params: { name }} = req

  retrieveCityByName(name)
    .then((city) => {
      res.send(city);
    })
    .catch((err) => res.send...);
  */
  let cityRequested = req.params.name;
  cityModel
    .findOne({ name: cityRequested })
    .then((city) => {
      res.send(city);
    })
    .catch((err) => console.log(err));
});

router.post("/", (req, res) => {
  // logic/createNewCity.js (.spec.js)
  /*
  const { body: { name, country, photo }} = req

  createNewCity(name, country, photo)
    .then(id => res.send(id))
    .catch((err) => {
        res.status(500).send("Server error");
      });
  */
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
