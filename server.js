var express = require("express");
var bodyParser = require("body-parser");
var stripe = require("stripe")("sk_test_YOBQn1xtebvhzKhnJycXgHED");
var port = process.env.PORT || 8080;
var mongoose = require("mongoose");

var app = express();
var amount = Number;
app.use(bodyParser.json());
app.use(express.static(__dirname + "/app"));

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET , POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-requested-With, content-type,"
  );
  next();
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/app/html/index.html");
});

app.get("/countdown", function(req, res) {
  res.sendFile(__dirname + "/app/html/countdown.html");
});

app.get("/donate", function(req, res) {
  res.sendFile(__dirname + "/app/html/donate.html");
});

app.get("/charge", function(req, res) {
  res.sendFile(__dirname + "/app/html/charge.html");
});

app.post("/", function(req, res) {
  amount = req.body.donationAmount;
  console.log(amount);
  res.redirect(307, "http://localhost:8080/");
});

app.post("/charge", function(req, res) {
  var token = req.body.stripeToken;
  res.json("charge");
  console.log(amount);
  console.log(token);
  stripe.charges.create(
    {
      amount: amount,
      currency: "usd",
      source: token, // obtained with Stripe.js
      description: "Charge for ava.robinson@example.com"
    },
    function(err, charge) {
      // asynchronously called
    }
  );
});

var apiRouter = express.Router();

//register Routes
app.use("/api", apiRouter);

//start the server

app.listen(port);
console.log("Magic Happens on this port " + port);
