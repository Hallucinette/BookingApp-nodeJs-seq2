const express = require('express');
const router = express.Router();
const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json')['development'];

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect
  });
const User = require('../models/user')(
    sequelize, DataTypes
);

/* GET user page. */
router.get('/', function(req, res, next) {
  res.json({message:"GET user"});
});

router.post('/', async (req, res, next) => {
    const user = await User.create({
        role: 'client',
        firstName: 'FirstName',
        lastName: 'LastName',
        email: '@mail.com',
        phoneNumber: '061256842',
        password: 'testpassword'
    });
    res.json({message:"POST user"});
});

router.put('/', function(req, res, next) {
  res.json({message:"PUT user"});
});

router.delete('/', function(req, res, next) {
  res.json({message:"DELETE user"});
});

module.exports = router;
