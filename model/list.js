const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListSchema = new Schema({
    name:String,
    latitude:String,
    longitude:String,
    userId:String
});


module.exports = List = mongoose.model('list',ListSchema);
