const express = require("express");
const router = express.Router();

const { Compte } = require("../../models/Compte.model");

/// @route GET api/users
/// @desc GET all users in db
/// @access public
router.get("/", (req, res) => {
  Compte.find({})
    .then(data => {
      if (data != null) res.status(200).json(data);
      else res.status(404).json(null);
    })
    .catch(err => {
      res.status(505).send(err.message);
    });
});
/// @route GET api/users/username
/// @desc GET one user whos username == username
/// @access public
router.get("/:username", async (req, res) => {
  Compte.findOne({ username: req.params.username })
    .then(data => {
      if (data != null) res.status(200).json(data);
      else res.status(200).json(null);
    })
    .catch(err => {
      res.status(505).send(err.message);
    });
});

module.exports = router;
