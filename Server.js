require('dotenv').config()
let express = require('express');
let app= express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shelmark', {useNewUrlParser: true});

let catRouter =  require('./route/category.route');
app.use("/category",catRouter);

let port= process.env.PORT_SERVER;
app.listen(port, console.log("Server is listening on port "+port));

