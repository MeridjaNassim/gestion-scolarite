const express = require("express");
const router = express.Router();
const { Enseignant } = require("../models/Enseignant.model");

/// @route GET api/enseignants
/// @desc GET all enseignants in db conform to a query
router.get("/", (req, res, next) => {
  Enseignant.find(req.query)
    .then(data => {
      res.status(200).json({ data: data });
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
      .then(data => res.status(200).json({ data: data }))
      .catch(err => res.status(400).json({ msg: err.message }));
  } else {
    res.status(400).send("Some thing went wrong ");
  }
});
router.put("/update", (req, res, next) => {
  const query = {
    _id: req.query.id
  };
  if (req.body != {}) {
    const update = req.body;
    Enseignant.updateOne(query, req.body)
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(400).json({ msg: err.message });
      });
  } else {
    res.status(400).json({ msg: "Request Body is null , cannot update" });
  }
});

module.exports = router;
