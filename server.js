const express = require("express");
// const favicon = require("express-favicon");
const path = require("path");
const MongoClient = require("mongodb").MongoClient;
const connectionString = "mongodb://localhost:27017";
const app = express();
var db = null;
var adminCollection = null;
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));
app.get("/ping", function (req, res) {
  return res.send("pong");
});
// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });
// MongoClient.connect(connectionString, (err, client) => {
//   if (err) return console.error(err);
//   console.log("Connected to Database");
// });

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then((client) => {
    db = client.db("library");
    adminCollection = db.collection("Books");
    console.log(db);
  })
  .catch((error) => console.error(error));

app.get("/", function name(req, res) {
  db.collection("Books")
    .find()
    .toArray()
    .then((result) => {
      console.log(result);
      var str = JSON.stringify(result);
      str = str.replace(/\"_id\":/g, '"id":');
      str = str.replace(/\"Name\":/g, '"bookName":');
      str = str.replace(/\"Price\":/g, '"price":');
      str = str.replace(/\"Category\":/g, '"category":');
      str = str.replace(/\"Author\":/g, '"author":');
      json = JSON.parse(str);
      res.send(json);
    })
    .catch((error) => console.error(error));
});

app.post("/create", function (req, res) {
  console.log(req.body);
  adminCollection
    .insertOne(req.body)
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((error) => console.error(error));
});

var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.put("/update", function (req, res) {
  //   const { id, name, description } = req.body;
  //   res.send(`Name id name, desc description`);
  console.log(req.body._id);
  adminCollection
    .findOneAndUpdate(
      { id: req.body.id },
      { $set: { info: req.body.info } },
      { upsert: true }
    )
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((error) => console.error(error));
});

app.delete("/delete/:id", function (req, res) {
  const { id } = parseInt(req.params.id, 10);
  console.log("id = " + req.params.id);
  //res.send(`Delete record with id id`);
  adminCollection
    .deleteOne({ _id: req.params.id })
    .then((result) => res.send(result))
    .catch((error) => console.error(error));
});

app.get("/books/:bookId", (req, res) => {
  res.send(req.params.bookId);
});

app.listen(8001, function () {
  console.log("listening on 8001");
});
