let express= require('express');
let router = express.Router();
var mysql = require('mysql');
router.route("/").get((req, res)=>{
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "shelmark"
  });
  connection.connect(function(err) {
    if (err) throw err;
    let {orderby, order} = req.query;
    connection.query(`SELECT * FROM products ORDER BY ${orderby} ${order}`, function (err, result, fields) {
      res.json({product:result});
    });
  });
});
router.route("/search").get((req, res)=>{
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "shelmark"
  });
  let proName = req.query.proName;
  connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT * FROM products JOIN category ON products.proCatId=category.catId WHERE category.catName LIKE '%"+proName+"%' OR products.proName LIKE '%"+proName+"%'", function (err, result, fields) {
      res.json({product:result});
    });
  });
})
router.route("/newPro").get((req, res)=>{
    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "shelmark"
    });
    connection.connect(function(err) {
      if (err) throw err;
      connection.query("SELECT * FROM products ORDER BY proDate DESC LIMIT 6", function (err, result, fields) {
        res.json({product:result});
      });
    });
});

router.route("/flashPro").get((req, res)=>{
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "shelmark"
  });
  connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT * FROM products ORDER BY proSold DESC LIMIT 6", function (err, result, fields) {
      res.json({product:result});
    });
  });
})

router.route("/bestRating").get((req, res)=>{
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "shelmark"
  });
  connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT * FROM products ORDER BY proRating DESC LIMIT 6", function (err, result, fields) {
      res.json({product:result});
    });
  });
})
router.route("/:proId").get((req, res)=>{
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "shelmark"
  });
  let proId = req.params.proId;
  connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT * FROM products WHERE proId="+proId, function (err, result, fields) {
      res.json({product:result});
    });
  });
})
router.route("/sameCat/:catId").get((req, res)=>{
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "shelmark"
  });
  let catId = req.params.catId;
  connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT * FROM products WHERE proCatId="+catId, function (err, result, fields) {
      res.json({product:result});
    });
  });
})
module.exports = router;