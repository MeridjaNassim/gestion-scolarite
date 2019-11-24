const express = require("express");
const router = express.Router();
const { Compte } = require("../../models/Compte.model");
const bcrypt = require("bcrypt");
const config = require("config");
const jwt = require("jsonwebtoken");
/// @route GET /login
/// @desc GET logs in one user
/// @access public
router.post("/", async (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    const query = {
      username: username
    };
    await Compte.findOne(query, async (err, user) => {
      if (err) throw err;
      if (!user) res.status(404).send("User Not Found");
      else {
        await bcrypt.compare(password, user.password, (err, same) => {
          if (err) console.log(err.message);
          if (same) {
            jwt.sign(
              {
                id: user._id,
                isAdmin: user.isAdmin,
                profileId: user.profileId
              },
              config.get("jwtSecret"),
              (err, token) => {
                if (err) res.status(400).json({ msg: err.message });
                const userAccess = {
                  token: token,
                  user: {
                    id: user._id,
                    isAdmin: user.isAdmin,
                    profileId: user.profileId,
                    username: user.username,
                    email: user.email,
                    profileType: user.profileType
                  }
                };
                res.status(200).json(userAccess);
              }
            );
          } else {
            res.status(400).json({ msg: "Invalid credentials" });
          }
        });
      }
    });
  } else {
    res.send("Please Enter All fields");
  }
});

module.exports = router;
