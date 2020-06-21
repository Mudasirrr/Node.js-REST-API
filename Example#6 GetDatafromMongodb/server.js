const express = require('express');
const app = express();
const mongoose = require('mongoose');

const bodyparser = require('body-parser');


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