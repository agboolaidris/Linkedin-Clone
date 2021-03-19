const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    avater: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
  },
  { timestamps: true }
);

schema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

const User = model("User", schema);
module.exports = User;
