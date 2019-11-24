const express = require("express");
const planService = express();
const memoiresRoute = require("./routes/api/memoires");
/// middlware  :
planService.use(express.json());
planService.use("/api/memoires", memoiresRoute);
///

planService.get("/", (req, res) => res.send("Plannification Service!"));

const port = 3003;
planService.listen(port, () =>
  console.log(`Plannification Service listening on port ${port}`)
);
