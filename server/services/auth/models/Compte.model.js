const db = require("../db/db");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const config = require("config");
const mongoose = db.mongoose;
const Schema = mongoose.Schema;
const String = Schema.Types.String;
const Boolean = Schema.Types.Boolean;
const ObjectID = Schema.Types.ObjectId;

const compteSchema = new Schema(
  {
    _id: {
      type: ObjectID,
      auto: true
    },
    username: {
      type: String,
      minlength: 3,
      maxlength: 50,
      unique: true
    },
    email: {
      type: String,

      minlength: 5,
      maxlength: 255,
      unique: true
    },
    password: {
      type: String,
      minlength: 3,
      maxlength: 255
    },
    profileType: String,
    profileId: {
      type: ObjectID,
      auto: true
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  {
    collection: "comptes"
  }
);
compteSchema.methods.generateAuthToken = function() {
  const token = jwt.sign(
    {
      _id: this._id,
      isAdmin: this.isAdmin
    },
    config.get("myprivatekey")
  );
  return token;
};
function validateCompte(compte, callback) {
  const schema = {
    username: joi
      .string()
      .min(3)
      .max(50),
    email: joi
      .string()
      .min(5)
      .max(255)
      .email(),
    password: joi
      .string()
      .min(3)
      .max(255)
  };
  return joi.validate(compte, schema, callback);
}
const Compte = mongoose.model("Compte", compteSchema);
exports.Compte = Compte;
exports.validate = validateCompte;
