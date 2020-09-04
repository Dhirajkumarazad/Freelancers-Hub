const express = require('express');
const userSchema = require('../model/userModel');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/SITHotel');

router.post('/signup', (req, res, next) => {
    var users = new userSchema(req.body)
    users.save(function(err, result) {
        console.log('result');
        console.log(req.body)
        if (err) {
            
            res.status(500).json(err);
        } else {
            res.status(200).json({
                status: "success",
                data: result
            })
        }
    })
});

router.post('/login', (req, res, next) => {
    
    console.log(req.body);

    userSchema.findOne({ Email: req.body.Email }, function(err, result) {
        if (err) {
            res.status(500).json(err);
            
            
        } else {
            if (req.body.password == result["password"]) {
                res.status(200).json({
                    status: "success",
                    data: result
                })

            } else {

                res.status(200).json({
                    status: "failure",
                    data: null
                })

            }
        }


    })

});

router.get('/', (req, res, next) => {
    res.status(200).json("auth");
})
module.exports = router;