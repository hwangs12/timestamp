// server.js
// where your node app starts

// init project
var dotenv = require("dotenv");
var express = require("express");
var app = express();
dotenv.config();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
	res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api", function (req, res) {
	const date = new Date();
	res.json({ unix: Date.now(), utc: date.toUTCString() });
});

app.get("/api/:date", function (req, res) {
	const date = new Date(Number(req.params.date) * 1000);
	res.json({ unix: Number(req.params.date), utc: date.toString() });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
	console.log("Your app is listening on port " + process.env.PORT);
});
