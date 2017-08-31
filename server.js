var express = require("express");
var bodyParser = require("body-parser");
var stripe = require("stripe")(process.env.stripeKey);
var port = process.env.PORT || 8080;
var mongoose = require("mongoose");

var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + "/app"));
app.use(bodyParser.urlencoded({ extended: false }));

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

app.get("/vc", function(req, res) {
  res.sendFile(__dirname + "/app/html/vc.html");
});

app.get("/vcSubmit", function(req, res) {
  res.sendFile(
    __dirname +
      "/app/vc/Villanova_Special_Olympics_Volunteer_Coordinator_Application.html"
  );
});

app.post("/charge10", function(req, res) {
  var token = req.body.stripeToken;
  console.log(token);
  stripe.charges.create(
    {
      amount: 1000,
      currency: "usd",
      source: token
    },
    function(err, charge) {
      // asynchronously called
    }
  );
});

app.post("/charge20", function(req, res) {
  var token = req.body.stripeToken;
  console.log(token);
  stripe.charges.create(
    {
      amount: 2000,
      currency: "usd",
      source: token
    },
    function(err, charge) {
      // asynchronously called
    }
  );
});

app.post("/charge25", function(req, res) {
  var token = req.body.stripeToken;
  console.log(token);
  stripe.charges.create(
    {
      amount: 2500,
      currency: "usd",
      source: token
    },
    function(err, charge) {
      // asynchronously called
    }
  );
});

app.post("/charge50", function(req, res) {
  var token = req.body.stripeToken;
  console.log(token);
  stripe.charges.create(
    {
      amount: 5000,
      currency: "usd",
      source: token
    },
    function(err, charge) {
      // asynchronously called
    }
  );
});

app.post("/charge100", function(req, res) {
  var token = req.body.stripeToken;
  console.log(token);
  stripe.charges.create(
    {
      amount: 10000,
      currency: "usd",
      source: token
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
