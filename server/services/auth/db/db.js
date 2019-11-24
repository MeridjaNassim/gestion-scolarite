const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/gestionscolarite", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.on("error", console.error.bind(console, "connection error : "));
connection.once("open", () => {
  console.log("====================================");
  console.log("Connected Auth to DB");
  console.log("====================================");
});

exports.connection = connection;
exports.mongoose = mongoose;
