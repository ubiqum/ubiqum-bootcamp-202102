const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  commentText: {
    type: String,
    required: true,
  },
});

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
  comments: [commentSchema],
});

module.exports = mongoose.model("itinerary", itinerarySchema);
