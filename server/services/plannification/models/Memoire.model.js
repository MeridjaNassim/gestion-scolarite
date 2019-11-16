var db = require("../db/db");
const mongoose = db.mongoose;
const Schema = mongoose.Schema;
const String = Schema.Types.String;
const ObjectID = Schema.Types.ObjectId;
const memoireSchema = Schema(
  {
    _id: {
      type: ObjectID,
      auto: true
    },
    nom: {
      type: String,
      required: true,
      index: true
    },
    branche: String,
    description: String,
    date_creation: {
      type: Date,
      default: Date.now
    },
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
exports.Memoire = Memoire;
