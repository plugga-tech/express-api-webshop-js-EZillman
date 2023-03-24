var express = require('express');
var router = express.Router();
const userModel = require('../models/user-model');

/* GET users listing. */
router.get('/', async (req, res) => {


  try {
    const users = await userModel.find({}, 'name email id');


    res.status(200).json(users);

  } catch (err) {
    console.log(err);
    res.status(500).send('No users found');
  }

});

router.post('/', async (req, res) => {
  const userId = req.body.id;

  try {
    const user = await userModel.findById(userId);


    if (!user) {
      return res.status(404).send('No user found');
    }

    res.json(user);

  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }

});


router.post('/add', async (req, res) => {
  const user = await userModel.create(req.body);
  res.status(201).json(user);
});

module.exports = router;
