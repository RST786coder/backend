const { Schema, default: mongoose } = require("mongoose");

const dataSchema = new Schema(
  {
    name: String,
    first_seen: String,
    last_seen: String,
    id: String,
    client_id: String,
    type: String,
    email: String,
  },
  { timestamps: true }
);

mongoose.models = {};
module.exports = mongoose.model("datas", dataSchema);
