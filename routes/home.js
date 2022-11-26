const datas = require("../models/datas");
const db = require("../mongo/db");

async function home(req, res) {
  let users = await datas.find({});
  res.json({ data: users });
}

module.exports = db(home);
