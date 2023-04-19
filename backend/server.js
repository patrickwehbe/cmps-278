require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

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


app.use("/", (req, res) => {
	res.sendFile(path.resolve(__dirname + `/index.html`));
});

const port = process.env.PORT || 7000;
app.listen(port, () => {
	console.log("Server running on port: ", port);
});
