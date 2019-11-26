const express = require("express");
const router = express.Router();
const apiAdapter = require("./apiAdapter");
const BASE_URL = "http://auth:3001";
const api = apiAdapter(BASE_URL);

router.get("/authService", (req, res) => {
  api.get("/").then(resp => {
    res.send(resp.data);
  });
});
router.get("/api/users", (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data);
  });
});

router.get("/api/users/:username", (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data);
  });
});

router.post("/login", (req, res) => {
  api
    .post(req.path, req.body)
    .then(resp => {
      res.send(resp.data);
    })
    .catch(err => {
      res.status(400).send(err.message);
    });
});
router.post("/signup", (req, res) => {
  api
    .post(req.path, req.body)
    .then(resp => {
      res.send(resp.data);
    })
    .catch(err => {
      res.status(err.status).send(err.message);
    });
});

module.exports = router;
