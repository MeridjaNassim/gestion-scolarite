const db = require("../../db/db");
const mongoose = db.mongoose;
const Schema = mongoose.Schema;
const String = Schema.Types.String;
const Number = Schema.Types.Number;
const Date = Schema.Types.Date;
const ObjectID = Schema.Types.ObjectId;

const moduleSchema = Schema({
  _id: ObjectID,
  year: String,
  section: ObjectID,
  groupe: ObjectID,
  module_id: ObjectID
});
const enseignantSchema = Schema(
  {
    _id: ObjectID,
    nom: String,
    prenom: String,
    nss: Number,
    date_naissance: Date,
    lieu_naissance: String,
    date_recrutement: Date,
    etat_civil: String,
    num_tels: [String],
    adresse: String,
    grade: String,
    modules: [moduleSchema],
    postes: [String]
  },
  { collection: "enseignants" }
);
const Enseignant = mongoose.model("Enseignant", enseignantSchema);
exports.Enseignant = Enseignant;
