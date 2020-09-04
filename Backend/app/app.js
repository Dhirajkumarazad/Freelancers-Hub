const express = require("express");
const bodyParser = require("body-parser");

//const mongoose = require("mongoose");

const app = express();

//const mongoose = require('mongoose');

// mongoose.connect("mongodb+srv://first:vAQVfvCMx8UFxAju@cluster0-6vhmz.mongodb.net/test?retryWrites=true")
// .then(()=>{
//     console.log('Connected to database!');
// })
// .catch(()=>{
//     console.log('Connection failed!');
// });

const authController = require('../controller/authController');
const postController = require('../controller/postController');




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});



app.use('/auth', authController);
app.use('/posts', postController);
app.get('/', (req, res, next) => {
    res.status(200).json("Hello");
})


module.exports = app;