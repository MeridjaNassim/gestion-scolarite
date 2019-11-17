const express = require("express");
const bodyparser = require("body-parser");
const gcontinueService = express();
const enseignantsRoute = require('./routes/enseignants.route');


/// middleware  

gcontinueService.use('/api/enseignants',enseignantsRoute);

gcontinueService.get("/", (req, res) => res.send("Gestion Continue Service!"));


const port = 3002;

gcontinueService.listen(port, () =>
  console.log(`Gestion Continue listening on port ${port}`)
);
