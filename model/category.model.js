var mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({
    name: {
        type: String
    },
    image:{
        type: String
    }
});
var Category = mongoose.model('Category', CategorySchema, 'category');

module.exports= Category;