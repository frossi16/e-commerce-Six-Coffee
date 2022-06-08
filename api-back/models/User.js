const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  lastNme: {
    type: String,
    required: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email",
    },
    required: [true, "Email required"],
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
