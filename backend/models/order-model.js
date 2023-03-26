const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    user: {
        type: String,
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

module.exports = mongoose.model('order', orderSchema);