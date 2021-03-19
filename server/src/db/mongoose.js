const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost/linkedin",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  },
  (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("connected to database");
    }
  }
);
