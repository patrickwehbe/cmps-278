/* eslint-disable prettier/prettier */
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { resolve } = require("path");
require('dotenv').config();

console.log(process.env.DB_NAME);


//MiddleWares

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: function (origin, callback) {
      return callback(null, true);
    },
    optionsSuccessStatus: 200,
    credentials: true,
    exposedHeaders: ["set-cookie"],
  })
);

//Routes

app.use("/user", require("./routes/userRouter"));
app.use("/application", require("./routes/applicationRouter"));
app.use("/book", require("./routes/bookRouter"));
app.use("/game", require("./routes/gameRouter"));

app.use("/", (req, res) => {
  res.sendFile(resolve(__dirname + `/index.html`));
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("Server running on port: ", port);
  console.log(process.env);
});
