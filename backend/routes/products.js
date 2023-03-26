var express = require('express');
var router = express.Router();
const productModel = require('../models/product-model');

/* GET users listing. */
router.get('/', async (req, res) => {
    try {
        const products = await productModel.find();

        res.status(200).json(products);

    } catch (err) {
        console.log(err);
        res.status(500).send('No products found');
    }

});

router.get('/:id', async (req, res) => {
    const productId = req.params.id;

    try {
        const product = await productModel.findById(productId);

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
    const product = await productModel.create(req.body);
    res.status(201).json(product);
});


module.exports = router;
