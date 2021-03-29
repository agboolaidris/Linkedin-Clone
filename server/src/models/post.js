const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    pictures: {
      type: String,
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    comments: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        text: {
          type: String,
          required: true,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

const autoPopulate = function (next) {
  this.populate("user", ["name", "avater"]);
  this.populate("comments.user", ["name", "avater"]);

  next();
};

schema.pre("find", autoPopulate);
schema.pre("findOne", autoPopulate);
schema.pre("findOneAndDelete", autoPopulate);
module.exports = Post = model("Post", schema);
