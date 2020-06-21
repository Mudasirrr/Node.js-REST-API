const express = require('express');
const {
    route
} = require('../../../Example#3Routes/routes/api/users');
const router = express.Router();
const bcrypt = require('bcryptjs');
//Load User model
const User = require('../../model/User');

// @route Get api/user/test
// @desc tests post route
// @access public
router.get('/test', (req, res, next) => {
    res.json({
        msg: "User works"
    })
});

//@route Post api/user/register
//@desc Register user
//@access Public
router.post('/register', (req, res, next) => {
    // console.log("listen register")
    User.find({
            name: req.body.name
        })
        .then(user => {
            if (!user) {
                return res.status(400).json({
                    name: "Name already exist"
                });
            } else {
                const newUser = new User({
                    name: req.body.name,
                    password: req.body.password
                });
                //@10 means character we want 
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err))
                    })
                })
            }
        });
});

module.exports = router;