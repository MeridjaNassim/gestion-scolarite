const express = require("express");
const app = express();
const port = 8080;
const router = require("./routers/router");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.get("/", (req, res) => res.send("Gateway for microservices!"));
app.listen(port, () => console.log(`API Gateway listening on port ${port}!`));
