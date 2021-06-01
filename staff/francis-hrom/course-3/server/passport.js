const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");
const keys = require("./keys");
const opts = {};

//const User = mongoose.model("user");
const User = require("./model/userModel");

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

const GoogleStrategy = require("passport-google-oauth20").Strategy;
//import generateRandomPassword from "./utils/generateRandomPassword";
// const generateRandomPassword = require("./utils/generateRandomPassword");

const passport = require("passport");
// serialize the user.id to save in the cookie session
// so the browser will remember the user when login
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// deserialize the cookieUserId to user in the database
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user);
    })
    .catch((e) => {
      done(new Error("Failed to deserialize an user"));
    });
});

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then((user) => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch((err) => console.log(err));
    })
  );

  passport.use(
    new GoogleStrategy(
      {
        clientID: keys.GOOGLE_CLIENT_ID,
        clientSecret: keys.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:5000/users/login/google/redirect",
      },
      (accessToken, refreshToken, profile, done) => {
        // passport callback function
        //check if user already exists in our db with the given profile ID
        User.findOne({ googleId: profile.id }).then((currentUser) => {
          if (currentUser) {
            //if we already have a record with the given profile ID
            done(null, currentUser);
          } else {
            //if not, create a new user
            //  const superStrongRandomPassword =generateRandomPassword()
            const superStrongRandomPassword =
              Math.random().toString(36).slice(2) +
              Math.random().toString(36).slice(2) +
              Math.random().toString(36).slice(2).toUpperCase();

            // investigate for errors HERE
            bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(superStrongRandomPassword, salt, (err, hash) => {
                if (err) throw err;
                //superStrongRandomPassword = hash;

                new User({
                  googleId: profile.id,
                  name: profile.displayName,
                  email: profile.emails[0].value,
                  password: hash,
                })
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

          /* {
            //if not, create a new user
            const superStrongRandomPassword = generateRandomPassword();
            new User({
              googleId: profile.id,
              name: profile.displayName,
              email: profile.emails[0].value,
              password: superStrongRandomPassword,
              // change to random password generator and save with bcrypt
            })
              .save()
              .then((newUser) => {
                done(null, newUser);
              });
          } */
        });
      }
    )
  );

  /*   passport.use(
    new GoogleStrategy(
      {
        clientID: keys.GOOGLE_CLIENT_ID,
        clientSecret: keys.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:5000/users/login/google/redirect",
      },
      function (accessToken, refreshToken, profile, cb) {
        User.findOrCreate({ googleId: profile.id }, function (err, user) {
          return cb(err, user);
        });
      }
    )
  ); */
};

/*
{
[0]   id: '117775452342820934816',
[0]   displayName: 'Francis Hrom',
[0]   name: { familyName: 'Hrom', givenName: 'Francis' },
[0]   emails: [ { value: 'francis.hrom@gmail.com', verified: true } ],
[0]   photos: [
[0]     {
[0]       value: 'https://lh3.googleusercontent.com/a-/AOh14GjMVIJUUTc2RaKDGg9rOIOPVkBG1y05V8XJl7-2=s96-c'
[0]     }
[0]   ],
[0]   provider: 'google',
[0]   _raw: '{\n' +
[0]     '  "sub": "117775452342820934816",\n' +
[0]     '  "name": "Francis Hrom",\n' +
[0]     '  "given_name": "Francis",\n' +
[0]     '  "family_name": "Hrom",\n' +
[0]     '  "picture": "https://lh3.googleusercontent.com/a-/AOh14GjMVIJUUTc2RaKDGg9rOIOPVkBG1y05V8XJl7-2\\u003ds96-c",\n' +
[0]     '  "email": "francis.hrom@gmail.com",\n' +
[0]     '  "email_verified": true,\n' +
[0]     '  "locale": "en-GB"\n' +
[0]     '}',
[0]   _json: {
[0]     sub: '117775452342820934816',
[0]     name: 'Francis Hrom',
[0]     given_name: 'Francis',
[0]     family_name: 'Hrom',
[0]     picture: 'https://lh3.googleusercontent.com/a-/AOh14GjMVIJUUTc2RaKDGg9rOIOPVkBG1y05V8XJl7-2=s96-c',
[0]     email: 'francis.hrom@gmail.com',
[0]     email_verified: true,
[0]     locale: 'en-GB'
[0]   }
[0] }
*/
