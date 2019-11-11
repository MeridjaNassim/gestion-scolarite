var db = require("../db");
const mongoose = db.mongoose;
const Schema = mongoose.Schema;
const String = Schema.Types.String;
const Number = Schema.Types.Number;
const Date = Schema.Types.Date;
const ObjectID = Schema.Types.ObjectId;

const compteSchema = new Schema(
  {
    _id: ObjectID,
    username: String,
    password: String,
    profileType: String,
    profileId: String
  },
  {
    collection: "comptes"
  }
);
const Compte = mongoose.model("Compte", compteSchema);
exports.Compte = Compte;
