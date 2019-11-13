const express = require("express");
const db = require("./db/db");
const bodyparser = require("body-parser");
const authService = express();
const jwt = require("jsonwebtoken");
const { Compte } = require("./models/Compte.model");
const bcrypt = require("bcrypt");
authService.use(bodyparser.json());
authService.use(bodyparser.urlencoded({ extended: true }));

/// default route
authService.get("/", (req, res) => {
  res.send(`Auth Service`);
});
/// gets all users in the DB  and passes them to json
authService.get("/api/users", (req, res) => {
  Compte.find((err, data) => {
    res.header("Content-Type", "application/json");
    res.send(JSON.stringify(data, null, 4));
  });
});
/// gets a specific user
authService.get("/api/users/:username", async (req, res) => {
  await Compte.findOne({ username: req.params.username }, (err, data) => {
    res.header("Content-Type", "application/json");
    res.send(JSON.stringify(data, null, 4));
  });
});
/// checks for login access
authService.get("/login", async (req, res) => {
  if (req.query.username) {
    const query = {
      username: req.query.username
    };
    await Compte.findOne(query, async (err, data) => {
      await bcrypt.compare(req.query.password, data.password, (err, same) => {
        if (err) console.log(err.message);
        if (same) {
          console.log(err);
          res.send("Auth Succes");
        } else {
          res.send("Auth Failed");
        }
      });
    });
  }
});
/// adds a user in the db
authService.post("/api/users/add", async (req, res) => {
  res.json(req.body);
  await newUser(req.body.username, req.body.email, req.body.password);
  res.json(req.body);
});

const port = 3000;
authService.listen(port, () => {
  console.log(`Authentification Service listening on port ${port}`);
});

/// utility functions
async function newUser(username, email, password) {
  const user = Compte({
    username: username,
    password: password,
    email: email
  });
  await bcrypt.hash(user.password, 10, async (err, hash) => {
    if (err) throw err;
    user.password = hash;
    await user.save(err => {
      if (err) throw err;
    });
    console.log("User added");
  });
}
async function checkUser(username, password, cb) {
  /// getting user from db
  const query = {
    username: username
  };
  await Compte.findOne(query, async (err, data) => {
    if (err) throw err;
    const match = await bcrypt.compare(password, data.password);
    if (match) cb();
  });
}
