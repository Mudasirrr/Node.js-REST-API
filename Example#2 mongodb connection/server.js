const express = require('express');
const app = express();
const mongoose = require('mongoose');

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running on localhos, port:${PORT}`)
})