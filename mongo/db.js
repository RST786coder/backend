const mongoose = require("mongoose");

function db(handler) {
  return async (req, res) => {
    if (mongoose.connection.readyState === 1) {
      return handler(req, res);
    }
    await mongoose.connect(process.env.mongoURI);
    return handler(req, res);
  };
}

module.exports = db;
