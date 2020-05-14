let express= require('express');
let router = express.Router();
var mysql = require('mysql');
router.route("/newPro").get((req, res)=>{
    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "shelmark"
    });
    connection.connect(function(err) {
      if (err) throw err;
      connection.query("SELECT * FROM products ORDER BY date DESC LIMIT 6", function (err, result, fields) {
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
    connection.query("SELECT * FROM products ORDER BY sold DESC LIMIT 6", function (err, result, fields) {
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
    connection.query("SELECT * FROM products ORDER BY rating DESC LIMIT 6", function (err, result, fields) {
      res.json({product:result});
    });
  });
})
module.exports = router;