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
    handle: {
      type: String,
    },
    company: {
      type: String,
    },
    website: {
      type: String,
    },
    status: {
      type: String,
    },
    skills: {
      type: [String],
    },
    bio: {
      type: String,
    },
    github: {
      type: String,
    },
    experiences: [
      {
        title: {
          type: String,
          required: true,
        },
        company: {
          type: String,
          required: true,
        },
        location: {
          type: String,
        },
        title: {
          type: String,
          required: true,
        },
        from: {
          type: Date,
          required: true,
        },
        to: {
          type: Date,
        },
        current: {
          type: Boolean,
          default: false,
        },
      },
    ],
    education: [
      {
        school: {
          type: String,
          required: true,
        },
        degree: {
          type: String,
          required: true,
        },
        field: {
          type: String,
          required: true,
        },
        decription: {
          type: String,
        },
        from: {
          type: Date,
          required: true,
        },
        to: {
          type: Date,
        },
        current: {
          type: Boolean,
          default: false,
        },
      },
    ],
    social: {
      twiter: {
        type: String,
      },
      linkedin: {
        type: String,
      },
      facebook: {
        type: String,
      },
      instagram: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

schema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

module.exports = User = model("User", schema);
