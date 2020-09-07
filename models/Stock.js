const mongoose = require("mongoose");

const schemaOptions = {
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
}

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
  },
  schemaOptions,
  {
      collection: 'stocks'
  }
);

module.exports = mongoose.model("stocks", stockSchema);