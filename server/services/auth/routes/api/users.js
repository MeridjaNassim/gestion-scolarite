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

module.exports = router;
