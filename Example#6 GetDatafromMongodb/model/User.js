const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Users = mongoose.model('users', UserSchema);