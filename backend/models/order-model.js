const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    user: {
        type: [mongoose.Types.ObjectId],
        ref: "user",
        required: true
    },
    products: [
        {
            productId: {
                type: [mongoose.Types.ObjectId],
                ref: "product",
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ]
});

module.exports = mongoose.model('Order', OrderSchema);