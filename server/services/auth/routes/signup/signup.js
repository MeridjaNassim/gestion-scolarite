const express = require("express");
const router = express.Router();
const { validate } = require("../../models/Compte.model");
const jwt = require("jsonwebtoken");
const config = require("config");
const { Compte } = require("../../models/Compte.model");
const bcrypt = require("bcrypt");

/// @route POST /signup
/// @desc POST signup one user in the database
/// @access public
router.post("/", async (req, res) => {
  const inputAccount = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    profileType: req.body.profileType
  };
  validate(inputAccount, async (err, value) => {
    if (err) throw err;
    await Compte.findOne(
      { username: inputAccount.username },
      async (err, data) => {
        if (err) throw err;
        if (!data) {
          const user = Compte(inputAccount);
          await bcrypt.hash(user.password, 10, async (err, hash) => {
            if (err) throw err;
            user.password = hash;
            await user.save((err, user) => {
              if (err) throw err;
              jwt.sign(
                {
                  id: user._id,
                  isAdmin: user.isAdmin,
                  profileId: user.profileId
                },
                config.get("jwtSecret"),
                (err, token) => {
                  res.json({
                    token: token,
                    user: {
                      id: user._id,
                      isAdmin: user.isAdmin,
                      profileId: user.profileId,
                      username: user.username,
                      email: user.email,
                      profileType: user.profileType
                    }
                  });
                }
              );
              console.log("User added");
            });
          });
        } else {
          res.status(400).json({ msg: "User Already Registered" });
        }
      }
    ).catch(err => res.status(400).json({ msg: err.message }));
  })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    })
    .catch(err => res.status(400).json({ msg: err.message }));
});
module.exports = router;
