var db = require("../../db/db");
const mongoose = db.mongoose;
const Schema = mongoose.Schema;
const String = Schema.Types.String;
const Number = Schema.Types.Number;
const Date = Schema.Types.Date;
const ObjectID = Schema.Types.ObjectId;

const memoireSchema = Schema(
  {
    _id: ObjectID,
    nom: String,
    branche: String,
    description: String,
    proprietaire_ids: [ObjectID],
    encadreur_ids: [ObjectID],
    etudiants_ids: [ObjectID],
    liens: [String]
  },
  {
    collection: "memoires"
  }
);
const Memoire = mongoose.model("Memoire", memoireSchema);
exports.Mermoire = Memoire;
