const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  city: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  summary: {
    type: String,
  },
  duration: {
    type: String,
  },
  price: {
    type: String,
  },
  rating: {
    type: Number,
  },
});

module.exports = mongoose.model("itinerary", itinerarySchema);
