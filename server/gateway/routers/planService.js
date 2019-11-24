const express = require("express");
const router = express.Router();
const apiAdapter = require("./apiAdapter");
const BASE_URL = "http://gestion-scolarite-plannification:3003";
const api = apiAdapter(BASE_URL);

router.get("/api/memoires", (req, res) => {
  api.get(req.path, { params: req.query }).then(resp => {
    res.send(resp.data);
  });
});

router.post("/api/memoires/add", (req, res) => {
  api
    .post(req.path, req.body)
    .then(resp => {
      res.send(resp.data);
    })
    .catch(err => {
      res.status(400).send(err.message);
    });
});
router.delete("/api/memoires/delete", (req, res) => {
  api
    .delete(req.path, {
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
