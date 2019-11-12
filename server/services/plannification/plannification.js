const express = require("express");
const bodyparser = require("body-parser");
const planService = express();
const port = 3003;

planService.get("/", (req, res) => res.send("Plannification Service!"));

planService.listen(port, () =>
  console.log(`Plannification Service listening on port ${port}`)
);
