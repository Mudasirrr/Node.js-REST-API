const express = require('express');
const app = express();
const mongoose = require('mongoose');

const bodyparser = require('body-parser');

//plugin for the async error handling
require('express-async-errors');

app.use((req, res, next) => {
    req.nickName = "Zosn",
        next();
})


//Not found routes
app.use((req, res, next) => {
    req.status = 400;
    const error = new Error("Routes not found ");
    next(error);
});

//error handler
app.use((error, req, res, next) => {
    res.status(req.status || 500).send({
        message: error.message, //all infooo, like title...
        stack: error.stack //which function call.....and note one thing don't send stack in production because of security issue..
    });
})


//Body parser middleware
//@Uses: we use this for the purpose of access data from req like req.body.name etc
app.use(bodyparser.urlencoded({
    extended: false
}));
app.use(bodyparser.json());


//Routes
const users = require('./routes/api/users');
const items = require('./routes/api/items');


// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));
//Use Routes
app.use('/api/user', users);
app.use('/api/item', items);


const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`server is running on localhos, port:${PORT}`)
})