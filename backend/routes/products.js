var express = require('express');
var router = express.Router();
const ProductModel = require('../models/product-model');

router.get('/', async (req, res) => {
    try {
        const products = await ProductModel.find();

        res.status(200).json(products);

    } catch (err) {
        console.log(err);
        res.status(500).send('No products found');
    }

});

router.get('/:id', async (req, res) => {
    const productId = req.params.id;

    try {
        const product = await ProductModel.findById(productId);

        if (product) {
            res.json(product);

        } else {
            return res.status(404).send('No product found');
        }

    } catch (err) {
        console.log(err);
        res.status(500).send('No product found');
    }

});

router.post('/add', async (req, res) => {
    const product = await ProductModel.create(req.body);
    res.status(201).json(product);
});


module.exports = router;
