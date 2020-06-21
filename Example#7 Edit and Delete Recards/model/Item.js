const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Items = mongoose.model('items', ItemSchema);