const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema(
  {
    _id: String,
    classification: {
      type: String,
      required: true
    },
    objective: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    },
    identy: {
      type: String,
      required: true
    },
  }
//   ,
//   {
//     timestamps: true
//   }
);

module.exports = mongoose.model("stocks", stockSchema);