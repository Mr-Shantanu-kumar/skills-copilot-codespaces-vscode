//create web server
var express = require('express');
var router = express.Router();

//get all comments
router.get('/', function(req, res) {
        console.log("get all comments");
    });




module.exports = router;