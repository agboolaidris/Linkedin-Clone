const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
//db conig
require("./db/mongoose");

//init express
const app = express();

//setup cors
app.use(cors());

//setup bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//setup cookieparser
app.use(cookieParser());

//setup route
app.use("/api/auth", require("../src/routes/auth"));
app.use("/api/profile", require("../src/routes/profile"));
app.use("/api/post", require("../src/routes/post"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
