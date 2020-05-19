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
    connection.query(`SELECT * FROM products WHERE catId=${catId}`, function (err, result, fields) {
      res.json({products:result});
    });
  });
})

module.exports = router;