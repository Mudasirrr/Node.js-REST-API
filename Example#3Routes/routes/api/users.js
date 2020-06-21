const express = require('express');
const router = express.Router();

// @route Get api/user/test
// @desc tests post route
// @access public
router.get('/test', (req, res, next) => {
    res.json({
        msg: "User works"
    })
});

module.exports = router;