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
      connection.query("SELECT * FROM category", function (err, result, fields) {
        res.json({category:result});
      });
    });
})
router.route("/getCatById/:catId").get((req, res)=>{
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "shelmark"
  });
  let {catId} = req.params;
  connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT * FROM category WHERE catId="+catId, function (err, result, fields) {
      res.json({category:result});
    });
  });
})
router.route("/delete/:catId").get((req, res)=>{
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "shelmark"
  });
  let {catId} = req.params;
  connection.connect(function(err) {
    if (err) {
      res.status(404).send('Delete category fail!');
    }
    connection.query("DELETE FROM category WHERE catId="+catId, function (err, result, fields) {
      res.status(200).send('Delete category successfully!');
    });
  });
})
router.route("/probycategory/:catId").get((req, res)=>{
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "shelmark"
  });
  connection.connect(function(err) {
    if (err) throw err;
    let {catId} = req.params;
    catId= parseInt(catId);
    connection.query(`SELECT * FROM products WHERE proCatId=${catId}`, function (err, result, fields) {
      res.json({products:result});
    });
  });
})

module.exports = router;