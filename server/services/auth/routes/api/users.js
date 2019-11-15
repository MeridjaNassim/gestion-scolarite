const express = require("express");
const router = express.Router();

const { Compte } = require("../../models/Compte.model");

/// @route GET api/users
/// @desc GET all users in db
/// @access public
router.get("/", (req, res) => {
  Compte.find((err, data) => {
    res.header("Content-Type", "application/json");
    res.send(JSON.stringify(data, null, 4));
  });
});
/// @route GET api/users/username
/// @desc GET one user whos username == username
/// @access public
router.get("/:username", async (req, res) => {
  await Compte.findOne({ username: req.params.username }, (err, data) => {
    if (err) throw err;
    res.header("Content-Type", "application/json");
    res.send(JSON.stringify(data, null, 4));
  });
});

/// adds a user in the db
router.post("/", async (req, res) => {
  res.json(req.body);
  await newUser(req.body.username, req.body.email, req.body.password);
  res.json(req.body);
});
module.exports = router;
