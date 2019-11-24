var express = require("express");
var router = express.Router();
var authRouter = require("./authService");
var gcontinueRouter = require("./gcontinueService");
var planRouter = require("./planService");
router.use((req, res, next) => {
  console.log("Called ", req.path);
  next();
});

router.use(authRouter);
router.use(gcontinueRouter);
router.use(planRouter);
module.exports = router;
