let express= require('express');
let router = express.Router();
let Category = require('../model/category.model')
router.route("/").get((req, res)=>{
    Category.find()
    .then(category=>{
        res.json({category});
    })
    .catch(err=>{
        res.status(404, res.send("Can not get data"))
    })
})

module.exports= router;