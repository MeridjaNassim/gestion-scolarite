const express = require("express");
const router = express.Router();
const { Enseignant } = require("../models/Enseignant.model");

/// @route GET api/enseignants
/// @desc GET all enseignants in db conform to a query
router.get("/", (req, res, next) => {
  console.log(req.query);
  Enseignant.find(req.query)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});
router.post("/add", (req, res, next) => {
  if (req.body != undefined) {
    const ens = new Enseignant(req.body);
    ens
      .save()
      .then(data => res.status(200).json(data))
      .catch(err => res.status(400).json({ msg: err.message }));
  } else {
    res.status(400).send("Some thing went wrong ");
  }
});
router.patch("/update", async (req, res, next) => {
  if (req.body != {}) {
    const update = req.body;
    const doc = await Enseignant.findOneAndUpdate(req.query, update);
    if (doc) res.status(200).json(doc);
    else res.status(400).json(null);
  } else {
    res.status(400).json(err);
  }
});

module.exports = router;
