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
    connection.query(`SELECT * FROM product ORDER BY ${orderby} ${order}`, function (err, result, fields) {
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
    connection.query("SELECT * FROM product JOIN category ON product.cat_id=category.cat_id WHERE category.cat_name LIKE '%"+proName+"%' OR product.pro_name LIKE '%"+proName+"%'", function (err, result, fields) {
      res.json({product:result});
    });
  });
})
router.route("/getProById/:proId").get((req, res)=>{
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "shelmark"
  });
  let {proId} = req.params;
  connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT * FROM product WHERE pro_id="+proId, function (err, result, fields) {
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
      connection.query("SELECT * FROM product ORDER BY pro_date DESC LIMIT 6", function (err, result, fields) {
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
    connection.query("SELECT * FROM product ORDER BY pro_sold DESC LIMIT 6", function (err, result, fields) {
      res.json({product:result});
    });
  });
})
router.route("/delete/:proId").get((req, res)=>{
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "shelmark"
  });
  connection.connect(function(err) {
    if(err){
      res.status(404).send("Delete fail!")
    }
    let {proId} = req.params;
    connection.query("DELETE FROM product WHERE pro_id="+proId, function (err, result, fields) {
        res.status(200).send("Delete successfully!");
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
    connection.query("SELECT * FROM product ORDER BY pro_rating DESC LIMIT 6", function (err, result, fields) {
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
    connection.query("SELECT * FROM product WHERE pro_id="+proId, function (err, result, fields) {
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
    connection.query("SELECT * FROM product WHERE cat_id="+catId, function (err, result, fields) {
      res.json({product:result});
    });
  });
})
module.exports = router;