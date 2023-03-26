var express = require('express');
var router = express.Router();
const orderModel = require('../models/order-model');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('Orders');
});

module.exports = router;
