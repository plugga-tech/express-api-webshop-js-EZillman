var express = require('express');
var router = express.Router();
const userModel = require('../models/user-model');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('Users');
});

router.post('/add', async (req, res) => {
  const post = await userModel.create(req.body)
  res.status(201).json(post)
});

module.exports = router;
