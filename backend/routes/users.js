var express = require('express');
var router = express.Router();
const UserModel = require('../models/user-model');

/* GET users listing. */
router.get('/', async (req, res) => {
  try {
    const users = await UserModel.find({}, 'name email id');

    res.status(200).json(users);

  } catch (err) {
    console.log(err);
    res.status(500).send('No users found');
  }

});

router.post('/', async (req, res) => {
  const userId = req.body.id;

  try {
    const user = await UserModel.findById(userId);


    if (user) {
      res.json(user);

    } else {
      return res.status(404).send('No user found');
    }

  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }

});


router.post('/add', async (req, res) => {
  const user = await UserModel.create(req.body);
  res.status(201).json(user);
});


router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email, password });

    if (user) {
      res.json(user);
    } else {
      return res.status(401).send('Invalid email or password');
    }

  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }

});

module.exports = router;
