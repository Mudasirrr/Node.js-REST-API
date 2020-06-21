const express = require('express');
const router = express.Router();

// @route Get api/item/test
// @desc tests post route
// @access public
router.get('/test', (req, res, next) => {
    res.json({
        msg: "Item  works "
    })
});

module.exports = router;