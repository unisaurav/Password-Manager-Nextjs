const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  username: {
    required: true,
    type: String,
  },
  webpassword: {
    required: true,
    type: String,
  },
  webUrl: {
    required: true,
    type: String,
  },
  userObjectId: {
    required: true,
    type: mongoose.ObjectId, 
  },
  userIdName: {
    required: true,
    type: String,
  },
});

module.exports =
  mongoose.models.addpassword || mongoose.model("addpassword", dataSchema);
