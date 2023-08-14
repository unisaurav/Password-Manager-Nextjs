const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const dataSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.models.userdb || mongoose.model("userdb", dataSchema);
