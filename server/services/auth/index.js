const express = require("express");
const authService = express();
const usersRoute = require("./routes/api/users");
const loginRoute = require("./routes/login/login");
const signupRoute = require("./routes/signup/signup");

/// Middleware
authService.use(express.json());
authService.use("/api/users", usersRoute);
authService.use("/login", loginRoute);
authService.use("/signup", signupRoute);

/// default route
authService.get("/", (req, res) => {
  res.send(`Auth Service`);
});

/// checks for login access

const port = 3000;
authService.listen(port, () => {
  console.log(`Authentification Service listening on port ${port}`);
});

/// utility functions
