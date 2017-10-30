const express = require('express');
const router = express.Router();
var api = require('../db/hospital.api');

router.get('/', function (req, res, next) {
    console.log("hospital.js ==> router.get");

    api.fetchAllDoctors(function (response) {
        if (0 === response.code) {
            res.json(response.msg);
        } else {
            var err = new Error(response.msg);
            err.status = response.code;
            next(new Error(response.msg));
        }
    });
});


module.exports = router;