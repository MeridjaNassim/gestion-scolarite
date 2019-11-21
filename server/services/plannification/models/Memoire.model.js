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
    titre: {
      type: String,
      required: true
    },
    branche: String,
    description: String,
    promoteur_ids: [ObjectID],
    encadreur_ids: [ObjectID],
    etudiants_ids: [ObjectID],
    liens: [String]
  },
  {
    timestamps: {
      createdAt: "date_creation",
      updateAt: "date_maj"
    },
    collection: "memoires"
  }
);
const Memoire = mongoose.model("Memoire", memoireSchema);
exports.Memoire = Memoire;
