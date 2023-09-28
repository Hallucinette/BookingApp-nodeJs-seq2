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
router.get('/', async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.json({ users });
    } catch (error) {
        next(error);
    }
  });

  /* GET Current user. */
router.get('/me', async (req, res, next) => {
    try {
        const userId = req.user.id;
        console.log(userId);
        const currentUser = await User.findByPk(userId);

        if (!currentUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json(currentUser);
        // res.json({ users });
    } catch (error) {
        next(error);
    }
  });

  /* POST */
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

/* PUT */
router.put('/', async function(req, res, next) {
    const id = 1;
    const user = await User.findByPk(id);
    user.role = 'client';
    user.firstName = 'FirstName';
    user.lastName = 'LastName';
    user.email = '@mail.com';
    user.phoneNumber = '061256842';
    user.password = 'testpassword';
    await user.save();
    res.json({message:"PUT user"});
  });

  /* DELETE */
  router.delete('/', async function(req, res, next) {
    const id = req.body.id;
    const user = await User.findByPk(id);
    await user.destroy();
    res.json({message:"DELETE user"});
  });

module.exports = router;
