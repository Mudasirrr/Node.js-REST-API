const express = require('express');

const app = express();

/**
 * @Post 
 */
app.post('/post', (req, res, next) => {
    res.send({
        name: "Mudasir Hussain"
    });
});

/**
 * @Get 
 */
app.get('/get', (req, res, next) => {
    res.send({
        name: "Mudasir Hussain"
    });
});


app.listen(3000, () => {
    console.log("server is running on localhos, port:3000")
})