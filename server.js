var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require('path');
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var tables = [
	{
		name: 'Stan',
		phone: '555',
		email: 'stan@gmail.com',
		id: '1'
	},
	{
		name: 'Dave',
		phone: '111',
		email: 'dave@gmail.com',
		id: '6'
	},
	{
		name: 'Martha',
		phone: '777',
		email: 'martha@gmail.com',
		id: '3'
	},
	{
		name: 'Sharon',
		phone: '444',
		email: 'sharon@gmail.com',
		id: '2'
	}
];

var waitlist = [];

// Home page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Make reservation
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html")); 
});

// View tables and waitlist
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

// Displays table JSON
app.get("/api/tables", function(req, res) {
  return res.json(tables);
});

// Displays waitlist JSON
app.get("/api/waitlist", function(req, res) {
  return res.json(waitlist);
});

app.post("/api", function(req, res) {
  var newCustomer = req.body;
  console.log(newCustomer);
  if (tables.length < 5) {tables.push(newCustomer);}
  else {waitlist.push(newCustomer)};
  res.json(newCustomer);
});



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
