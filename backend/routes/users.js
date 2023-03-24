var express = require('express');
var router = express.Router();
const userModel = require('../models/user-model');

/* GET users listing. */
router.get('/', async (req, res) => {
  const users = await userModel.find({}, 'name email id')
  res.status(200).json(users)
});

router.post('/add', async (req, res) => {
  const post = await userModel.create(req.body)
  res.status(201).json(post)
});

module.exports = router;
