var express = require('express');
var router = express.Router();
const orderModel = require('../models/order-model');

/* GET users listing. */
router.post('/add', async (req, res) => {
    const { user, products } = req.body;
    const order = new orderModel({ user, products });

    try {
        await order.save();
        res.status(201).json(order);
    } catch (err) {
        res.status(500).send('Could not create order');
    }
});


router.get('/all', async (req, res) => {
    try {
        const orders = await orderModel.find();

        res.status(200).json(orders);

    } catch (err) {
        console.log(err);
        res.status(500).send('No orders found');
    }

});
module.exports = router;
