const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const postSchema = require('../model/lancer');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
// const mongoose = require('mongoose');


// mongoose.connect('mongodb://localhost/SITHotel');

router.post('/createPost', (req, res, next) => {


    var newPost = new postSchema(req.body);
    console.log(req.body); 

    newPost.save(function(err, rows) {

        if (err) {
            console.log("Error")
            res.status(500).json({
                err: err

            })
        } else {
            console.log("success");

            res.status(200).json({

                status: "success",
                data: rows

            })
        }
    })

});

// router.get('/', (req, res, next) => {

//     postSchema.find(function(err, rows) {

//         if (err) {
//             res.status(500).json({
//                 err: err
//             })
//         } else {
//             res.status(200).json({

//                 status: "success",
//                 data: rows

//             })
//         }

//     })
// })


router.get('/get', (req, res, next) => {

        postSchema.find().then(documents => {
          res.status(200).json({
            
            lancer: documents
          });
        });
        console.log("Inside get fun");
      });
    //   router.get('/user', (req, res, next) => {
    //       var query={location};
    //   postSchema.find(query).then(documents => {
    //     res.status(200).json({
    //       // message: "Posts fetched successfully!",
    //       lancer: documents
    //     });
    //   });
    //   console.log("Inside get fun");
    // });

module.exports = router;