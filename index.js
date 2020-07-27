const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

const { PORT } = require("./config");
require("./config/dbconnection");
require("./config/seedDB");

app.use(cors({ exposedHeaders: "x-auth-token" }));
// app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));
app.use(
	bodyParser.urlencoded({
		limit: "50mb",
		extended: true,
		parameterLimit: 1000000
	})
);
app.use(
	bodyParser.json({
		limit: "50mb",
		extended: true,
		parameterLimit: 1000000
	})
);
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	res.header("Access-Control-Allow-Credentials", true);
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
	next();
});
// app.use(bodyParser.urlencoded({ extended: true }));

// load schemas
const User = require("./models/User");
const Company = require("./models/Company");

// Routes
app.use("/api/index", require("./routes/api/indexRouter"));
app.use("/api/auth", require("./routes/api/authRouter"));

// 404 route
app.use("*", (req, res) => {
	res.send("invalid endpoint");
});

app.listen(process.env.PORT, err => {
	if (err) {
		console.log(`Unable to run server \n${err}`);
		return;
	}
	console.log(`Server is up and running on http://localhost:${PORT}`);
});
