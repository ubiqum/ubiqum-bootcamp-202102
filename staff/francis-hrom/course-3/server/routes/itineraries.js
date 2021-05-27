const express = require("express");

const router = express.Router();
const itineraryModel = require("../model/itineraryModel");

router.get("/all", (req, res) => {
  itineraryModel
    .find({})
    .then((files) => {
      res.send(files);
    })
    .catch((err) => console.log(err));
});

router.post("/", (req, res) => {
  const newItinerary = new itineraryModel({
    title: req.body.title,
    city: req.body.city,
    img: req.body.img,
    summary: req.body.summary,
    duration: req.body.duration,
    price: req.body.price,
    rating: req.body.rating,
  });
  newItinerary
    .save()
    .then((itinerary) => {
      res.send(itinerary);
    })
    .catch((err) => {
      res.status(500).send("Server error");
    });
});

router.get("/test", (req, res) => {
  res.send({ msg: "Test route." });
});

module.exports = router;
