require('dotenv').config()
let express = require('express');
let app= express();

let catRouter =  require('./route/category.route');
let proRouter = require('./route/product.route');
app.use("/category",catRouter);

app.use("/product",proRouter);
let port= process.env.PORT_SERVER;
app.listen(port, console.log("Server is listening on port "+port));

