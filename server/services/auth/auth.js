const express = require("express");
const bodyparser = require("body-parser");
const authService = express();
const port = 3000;

authService.get("/", (req, res) => res.send("Authentification Service!"));

authService.listen(port, () =>
  console.log(`Authentification Service listening on port ${port}`)
);
