var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const ordersRouter = require('./routes/orders');
const productsRouter = require('./routes/products');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/products', productsRouter);

require('dotenv').config();

async function init() {
    try {
        const options = { useNewUrlParser: true, useUnifiedTopology: true }
        await mongoose.connect(process.env.DATABASE_URL, options)
        console.log('Connected to cloud database');
    } catch (error) {
        console.log(error);
    }
};

init();

module.exports = app;
