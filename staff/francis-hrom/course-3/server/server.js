const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");

// Database connection
const db = require("./keys").mongoURI;
const mongoose = require("mongoose");

mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("Connection to Mongo DB established"))
  .catch((err) => console.log(err));

// Middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./passport")(passport);

app.use("/cities", require("./routes/cities"));
app.use("/itineraries", require("./routes/itineraries"));
app.use("/users", require("./routes/users"));

app.listen(port, () => {
  console.log("Server is running on " + port + "port");
});
