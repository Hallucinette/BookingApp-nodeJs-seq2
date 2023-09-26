const express = require('express');
const router = express.Router();
const { Sequelize, DataTypes } = require('sequelize');
const spot = require('../models/spot');
const config = require('../config/config.json')['development'];

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect
  });
const Spot = require('../models/spot')(
    sequelize, DataTypes
);

/* GET spot page. */
router.get('/', function(req, res, next) {
  res.json({message:"GET spot"});
});

router.post('/', async (req, res, next) => {
    const spot = await Spot.create({
        name: "1"
    });
    res.json({message:"POST spot"});
});

router.put('/', function(req, res, next) {
  res.json({message:"PUT spot"});
});

router.delete('/', function(req, res, next) {
  res.json({message:"DELETE spot"});
});

module.exports = router;
