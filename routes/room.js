const express = require('express');
const router = express.Router();
const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json')['development'];

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect
  });
const Room = require('../models/room')(
    sequelize, DataTypes
);

/* GET room page. */
router.get('/', function(req, res, next) {
  res.json({message:"GET room"});
});

router.post('/', async (req, res, next) => {
    const room = await Room.create({
        name: "1"
    });
    res.json({message:"POST room"});
});

router.put('/', function(req, res, next) {
  res.json({message:"PUT room"});
});

router.delete('/', function(req, res, next) {
  res.json({message:"DELETE room"});
});

module.exports = router;
