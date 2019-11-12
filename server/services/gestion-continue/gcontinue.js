const express = require("express");
const bodyparser = require("body-parser");
const gcontinueService = express();
const port = 3002;

gcontinueService.get("/", (req, res) => res.send("Gestion Continue Service!"));

gcontinueService.listen(port, () =>
  console.log(`Gestion Continue listening on port ${port}`)
);
