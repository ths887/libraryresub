const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/crudDB');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    title : String,
    author : String,
    genre : String,
    image : String
})
var Authordata = mongoose.model('authordata',AuthorSchema);

module.exports = Authordata;
