const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoDBErrors = require('mongoose-mongodb-errors');

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