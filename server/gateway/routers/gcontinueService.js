const express = require("express");
const router = express.Router();
const apiAdapter = require("./apiAdapter");
const BASE_URL = "http://gestion-scolarite-gcontinue:3002";
const api = apiAdapter(BASE_URL);

router.get("/api/enseignants", (req, res) => {
  api.get(req.path, { params: req.query }).then(resp => {
    res.send(resp.data);
  });
});

router.post("/api/enseignants/add", (req, res) => {
  api
    .post(req.path, req.body)
    .then(resp => {
      res.send(resp.data);
    })
    .catch(err => {
      res.status(400).send(err.message);
    });
});
router.patch("/api/enseignants/update", (req, res) => {
  api
    .patch(req.path, req.body, {
      params: req.query
    })
    .then(resp => {
      res.send(resp.data);
    })
    .catch(err => {
      res.status(err.status).send(err.message);
    });
});

module.exports = router;
