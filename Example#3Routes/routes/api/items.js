const express = require('express');
const router = express.Router();

router.get('/test', (req, res, next) => {
    res.json({
        msg: "Item  works"
    })
});

module.exports = router;