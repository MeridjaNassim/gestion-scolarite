const express = require("express");
const db = require("./services/db/db");
const compteModel = require("./services/db/models/Compte");
const mongoose = require("mongoose");
/// default variables :
const objectId = mongoose.Types.ObjectId;

// App
const app = express();
const port = process.env.PORT || 8082;

/// function that gets a user data based on his username
app.get("/comptes/:username", async (req, res) => {
  let user = req.params.username;
  let data = await compteModel.Compte.find({ username: user }, err => {
    if (err) throw err;
    console.log("====================================");
    console.log("Found data");
    console.log("====================================");
  });

  res.json(data[0]);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
