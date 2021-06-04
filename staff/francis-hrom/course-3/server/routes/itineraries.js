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

router.post("/add-comment", (req, res) => {
  const comment = {
    userId: req.body.userId,
    userName: req.body.userName,
    commentText: req.body.commentText,
  };

  itineraryModel
    .findOneAndUpdate(
      { _id: req.body.activityId },
      {
        $addToSet: {
          comments: comment,
        },
      }
    )
    .then(() => {
      res.send(comment);
    })
    .catch((err) => {
      res.status(500).send("Server error");
    });
});

router.delete("/delete-comment", (req, res) => {
  itineraryModel
    .findOneAndUpdate(
      { _id: req.body.activityId },
      {
        $pull: {
          comments: {
            _id: req.body.commentId,
          },
        },
      }
    )
    .then(() => {
      res.send(req.body.commentId);
    })
    .catch((err) => {
      res.status(500).send("Server error");
    });
});

router.get("/find-comment", (req, res) => {
  console.log(req.body.activityId);
  console.log(req.body.commentId);

  itineraryModel
    .find({
      comments: {
        $elemMatch: { _id: req.body.commentId },
      },
    })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

// ? how to search in IDs of a subschema
router.post("/edit-comment", (req, res) => {
  itineraryModel
    .findOneAndUpdate(
      {
        _id: req.body.activityId,
        "comments._id": req.body.commentId,
      },
      {
        $set: { "comments.$.commentText": req.body.commentText },
      }
    )
    .then(() => {
      res.send(req.body.commentText);
    })
    .catch((err) => {
      res.status(500).send("Server error");
    });
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
  newUser
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

// change let to const
router.get("/:name", (req, res) => {
  const cityRequested = req.params.name;
  itineraryModel
    .find({ city: cityRequested })
    .then((city) => {
      res.send(city);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
