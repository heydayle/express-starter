const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = Schema(
  {
      id: {
        type: String,
        required: true,
      },
    name: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: false,
    },

    birthday: {
      type: String,
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    password: { 
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = client = mongoose.model("client", clientSchema);
