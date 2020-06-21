const express = require('express');
const router = express.Router();


const Item = require('../../model/Item');

// @route Get api/item/test
// @desc tests post route
// @access public
router.get('/test', (req, res, next) => {
    res.json({
        msg: "Item  works "
    })
});
//@route Post api/item/add
//@desc Add items
//@access public
router.post('/add', (req, res, next) => {
    const newItem = new Item({
        name: req.body.name,
        rate: req.body.rate
    });
    newItem.save()
        .then(item => {
            res.json(item)
            console.log("Item added Succe ssfullly")
        })
        .catch(err => console.log("errro in saving"))
});


module.exports = router;