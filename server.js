var express = require("express");
var bodyParser = require("body-parser");
//var stripe = require("stripe")(process.env.stripeKey);
var stripe = require('stripe')('sk_test_YOBQn1xtebvhzKhnJycXgHED')
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

app.get("/marathon", function(req, res) {
  res.sendFile(__dirname + "/app/donate/index.html");
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

app.get("/results", function(req, res) {
  res.sendFile(
    __dirname +
      "/app/html/results.html"
  );
});

app.get("/more", function(req,res){
  res.sendFile(__dirname + '/app/html/placeholder.html')
})

app.get("/overview", function(req,res){
  res.sendFile(__dirname + '/app/schedule/overview.html')
})


app.get("/volsSchedule", function(req,res){
  res.sendFile(__dirname + "/app/schedule/index.html")
});

app.get("/coachSchedule", function(req,res){
  res.sendFile(__dirname + "/app/schedule/index.html")
});

app.get("/schedule", function(req,res){
  res.sendFile(__dirname + "/app/schedule/index.html")
});




var apiRouter = express.Router();

//register Routes
app.use("/api", apiRouter);

//start the server

app.listen(port);
console.log("Magic Happens on this port " + port);
