var express = require('express');
var router = express.Router();
const OrderModel = require('../models/order-model');
const ProductModel = require('../models/product-model');

/*
router.post('/add', async (req, res) => {
    const { user, products } = req.body;
    const order = new OrderModel({ user, products });

    try {
        await order.save();
        res.status(201).json(order);
    } catch (err) {
        res.status(500).send('Could not create order, invalid user id or product id');
    }
}); */

router.post('/add', async (req, res) => {
    try {
        const { user, products } = req.body;

        for (const item of products) {
            const product = await ProductModel.findById(item.productId);
            console.log(product);
            product.lager -= item.quantity;
            await product.save();
        }

        const order = new OrderModel({ user, products });
        await order.save();

        res.status(201).json(order);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});


router.get('/all', async (req, res) => {
    try {
        const orders = await OrderModel.find();

        res.status(200).json(orders);

    } catch (err) {
        console.log(err);
        res.status(500).send('No orders found');
    }
});

module.exports = router;
